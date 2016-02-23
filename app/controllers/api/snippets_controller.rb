class Api::SnippetsController < ApplicationController
  def index
    @snippets = Snippet.all
  end

  def show
    @snippet = Snippet.find(params[:id])
  end

  def create
    @snippet = Snippet.new(snippet_params)

    if @snippet.save
      render :show
    else
      render json: @snippet.errors.full_messages, status: 422
    end
  end

  def update
    @snippet = Snippet.find(params[:id])
    if @snippet.update_attributes(snippet_params)
      render :show
    else
      render json: @snippet.errors.full_messages, status: 422
    end
  end

  def destroy
    @snippet = Snippet.find(params[:id])
    @snippet.destroy
    render :show
  end

  private

  def snippet_params
    params.require(:snippet).permit(
      :author_id, 
      :language_id, 
      :title, 
      :image_url, 
      :body
    )
  end
end
