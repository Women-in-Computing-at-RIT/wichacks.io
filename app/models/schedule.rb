require 'httparty'
SHEETS_KEY = ENV['GOOGLESHEETS_KEY']
SHEETS_URL = "https://sheets.googleapis.com/v4/spreadsheets/".freeze
SHEETS_FIELDS = "fields=sheets(data.rowData.values.userEnteredValue)".freeze
SECTION = ":section".freeze
ITEM = ":item".freeze

# https://github.com/codeRIT/brickhack.io/wiki/Schedule---Google-Sheets-Integration
class Schedule
  def initialize(spreadsheet_id, sheet = 0)
    cache_key = "schedule/#{spreadsheet_id}"
    fresh_data = false
    parsed_response = Rails.cache.fetch(cache_key, expires_in: 30.minutes) do
      fresh_data = true
      response = HTTParty.get(SHEETS_URL + "#{spreadsheet_id}?#{SHEETS_FIELDS}&key=#{SHEETS_KEY}")
      response ? response.parsed_response.to_hash : nil
    end

    unless parsed_response && parsed_response["error"].nil?
      error_message = "Error reading Google Sheet #{spreadsheet_id}. Response: #{parsed_response['error'].inspect}"
      Rails.logger.error error_message
      Rollbar.error(error_message) if fresh_data # Prevent spam of Rollbar pings
      return
    end

    @sheet = parsed_response["sheets"][sheet]
  end

  def rows
    rows = @sheet ? @sheet["data"][0]["rowData"] : []
    # The first row is an instructional row
    rows.count > 1 ? rows.drop(1) : []
  end

  def sections
    section = []
    sections = []
    rows.each do |row|
      if row["values"][0]["userEnteredValue"]["stringValue"] == SECTION
        sections << section unless section.count.zero?
        section = [row["values"][1]["userEnteredValue"]["stringValue"]]
      else
        fill_section(section, row)
      end
    end
    sections << section unless section.empty?
    sections
  end

  private

  def fill_section(section, row)
    r = []
    row["values"].map do |col|
      next if !col.empty? && col["userEnteredValue"]["stringValue"] == ITEM
      r << (col.empty? ? '' : col["userEnteredValue"]["stringValue"])
    end
    section << r unless r.count.zero?
  end
end
