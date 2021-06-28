class CommentsController < ApplicationController
  before_action :authorize_request, only: :create

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :song_id)
    end
end
