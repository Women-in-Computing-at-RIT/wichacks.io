require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get root page" do
    get root_url
    assert_response :success
  end

  test "should get extras" do
    get extras_url
    assert_response :success
  end
end
