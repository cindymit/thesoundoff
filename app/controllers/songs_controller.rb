class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy, :add_comment]
  before_action :authorize_request, except: [:index, :show]

  # GET /songs
  def index
    @songs = Song.all

    render json: @songs
  end

  # GET /songs/1
  def show
    render json: @song, include: :comments
  end

  # POST /songs
  def create
    @song = Song.new(song_params)
    @song.user = @current_user

    if @song.save
      render json: @song, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /songs/1
  def destroy
    @song.destroy
  end

  # PUT /comments/1/songs/1
  def add_comment
    @comment = Comment.find(params[:comment_id])
    # @song = Song.find(params[:id])

    @comment.songs << @song
    # @comment.songs.push(@song)
    # ==== OR ====
    # @song.comments << @comment
    render json: @song, include: :comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def song_params
      params.require(:song).permit(:artist, :title, :genre, :album, :year_released, :image_url, :user_id)
    end
end
