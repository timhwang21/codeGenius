# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  image_url       :string           default("codegenius-logo.png")
#  body            :text
#  iq              :integer          default(0)
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      # redirect_to api_user_url(@user.id)
      redirect_to user_url(@user.id)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    if @user.nil?
      flash[:errors] = "User not found"
      redirect_to root_url
    else
      render :show
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :show
  end

  private
  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :image_url,
      :body,
      :password,)
  end
end
