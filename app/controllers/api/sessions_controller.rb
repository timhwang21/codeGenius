class Api::SessionsController < ApplicationController
  def new
  end

  def check
    @user = current_user if signed_in?
    render :create
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
    end
  end

  def destroy
    sign_out
  end
end
