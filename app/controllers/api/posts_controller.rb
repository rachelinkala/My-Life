class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:update, :destroy]

  def index
    render json: Post.all_posts
  end

  def create
    post = Post.create(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors.full_messages.join(',')}, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors.full_messages.join(',')}, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def poat_params
      params.require(:post).permit(:content)
    end


end
