class Api::AnnotationsController < ApplicationController
  def index
    @annotations = Annotations.where(snippet_id: params[:snippet_id])
  end

  def show
    @annotation = Annotation.find(params[:id])
  end

  def create
    @annotation = Annotation.new(annotation_params)
    if @annotation.save
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def update
    @annotation = Annotation.find(params[:id])
    if @annotation.update_attributes(annotation_comments)
      render :show
    else
      render json: @annotation.errors.full_messages, status: 422
    end
  end

  def destroy
    @annotation = Annotation.find(params[:id])
    @annotation.destroy
    render :show
  end

  private

  def annotation_params
    params.require(:annotation).permit(
      :author_id, 
      :snippet_id,
      :body,
      :start_idx,
      :end_idx
    )
  end
end
