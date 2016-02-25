class Api::SnippetCommentsController < ApplicationController
  def index
    @snippet_comments = SnippetComment.where(snippet_id: params[:snippet_id])
  end

  def show
    @snippet_comment = SnippetComment.find(params[:id])
  end

  def create
    @snippet_comment = SnippetComment.new(snippet_comment_params)

    if @snippet_comment.save
      render :show
    else
      render json: @snippet_comment.errors.full_messages, status: 422
    end
  end

  def update
    @snippet_comment = SnippetComment.find(params[:id])
    if @snippet_comment.update_attributes(snippet_comment_params)
      render :show
    else
      render json: @snippet_comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @snippet_comment = SnippetComment.find(params[:id])
    @snippet_comment.destroy
    render :show
  end

  private

  def snippet_comment_params
    params.require(:snippet_comment).permit(
      :author_id, 
      :snippet_id, 
      :body
    )
  end
end
