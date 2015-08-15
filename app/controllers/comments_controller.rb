class CommentsController < ApplicationController


  def create
    @comment = Comment.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.json { render json: @comment }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end


  def update
    @comment = Comment.find(params[:id])

    respond_to do |format|
      if @comment.update(comment_params)
        format.json { render json: @comment }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end


  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author, :post_id)
  end

end
