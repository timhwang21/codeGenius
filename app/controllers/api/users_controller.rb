class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = UserComment.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
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
      :image_url,
      :body,
      :password
    )
  end
end
