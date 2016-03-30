class Api::SnippetsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:download]

  def index
    @snippets = Snippet.all
  end

  # def index_lang
  #   @snippets = Snippet.where(language_id: params[:language_id])
  # end

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

  def add_view
    Snippet.increment_counter(:views, params[:id])
    render json: "Success"
  end

  def download
    snippet = Snippet.find(params[:id])
    send_data snippet.body, filename: snippet.create_filename
  end

  private

  def snippet_params
    params.require(:snippet).permit(
      :author_id, 
      :language_id, 
      :title, 
      :body,
      :desc,
      :views
    )
  end
end
