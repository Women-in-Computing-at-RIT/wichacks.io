class PagesController < ApplicationController
  def splash
    render :splash, layout: false
  end

  def extras
    # Automatically renders extras.html.erb with default layout
  end

  def home
    # Automatically renders home.html.erb with default layout
  end
end
