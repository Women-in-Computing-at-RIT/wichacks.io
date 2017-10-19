class PagesController < ApplicationController
  def index
    render :splash, layout: false
  end

  def extras
  end
end
