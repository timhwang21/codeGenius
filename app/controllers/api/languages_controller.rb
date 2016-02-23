class Api::LanguagesController < ApplicationController
  def index
    @languages = Language.all
  end

  def show
    @language = Language.find(params[:id])
  end

  def create
    @language = Language.new(language_params)

    if @language.save
      render :show
    else
      render json: @language.errors.full_messages, status: 422
    end
  end

  def update
    @language = Language.find(params[:id])
    if @language.update_attributes(language_params)
      render :show
    else
      render json: @language.errors.full_messages, status: 422
    end
  end

  def destroy
    @language = Language.find(params[:id])
    @language.destroy
    render :show
  end

  private

  def language_params
    params.require(:language).permit(:name)
  end
end
