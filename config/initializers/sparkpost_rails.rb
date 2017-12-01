SparkPostRails.configure do |c|
  c.api_key = ENV['SPARKPOST_API_KEY']
  c.track_opens = true
  c.track_clicks = true
  c.campaign_id = 'WiCHacks 2018'
  c.html_content_only = true
end
