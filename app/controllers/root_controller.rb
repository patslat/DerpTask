class RootController < ApplicationController
  before_filter :authorize_user
end
