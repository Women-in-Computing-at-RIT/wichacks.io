class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  rescue_from ActionController::InvalidAuthenticityToken, with: :invalid_token

  private

  def invalid_token
    flash[:notice] = "Session expired"
    redirect_to root_url
  end
end
