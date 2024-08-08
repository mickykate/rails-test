class PostsController < ApplicationController
  def index #	ユーザーを一覧表示する画面 http:get
    @posts = Post.all
    @schedule_total = Post.all.count
  end

  def new #ユーザーを新規登録する画面 http:get
    @post = Post.new
  end

  def create #ユーザーをDBに登録する処理 http:post
    @post = Post.new(params.require(:post).permit(:title, :start_date, :end_date, :is_all_day, :memo))
    if @post.save
      flash[:notice] = "スケジュールを新規登録しました"
      redirect_to posts_path
    else
      render "new"
    end
  end

  def show #ユーザー情報を確認する画面 http:get
    @post = Post.find(params[:id])
  end

  def edit #ユーザー情報を編集する画面 http:get
    @post = Post.find(params[:id])
  end

  def update #ユーザー情報を更新する処理 http:patch
    @post = Post.find(params[:id])
     if @post.update(params.require(:post).permit(:title, :start_date, :end_date, :is_all_day, :memo))
      flash[:notice] = "ユーザーIDが「#{@post.id}」の情報を更新しました"
      redirect_to post_path(@post)
     else
      flash[:alert] = "スケジュールの更新に失敗しました。#{@post.errors.full_messages.to_sentence}"
      render "edit"
    end
  end

  def destroy #ユーザー情報を削除する処理 http:delete
    @post = Post.find(params[:id])
    @post.destroy
      flash[:notice] = "スケジュールを削除しました。"
      redirect_to posts_path #リダイレクト先を修正
  end
end
