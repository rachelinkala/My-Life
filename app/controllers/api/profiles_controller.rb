class Api::ProfilesController < ApplicationController
  class Api::WorldUsersController < ApplicationController
    before_action :authenticate_user!
    before_action :set_profile, only: [:show, :update, :destroy]
  
    def index
      render json: Profile.all.order(created_at: :desc)
    end
  
    def show
      render json: @profile.user_posts
    end
  
    def create
      profile = Profile.create(profile_params)
      if profile.save
        render json: profile
      else
        render json: { errors: profile.errors.full_messages.join(',') }, status: 422
      end
    end
  
    def update
      if @profile.update(profile_params)
        render json: @profile
      else
        render json: { errors: @profile.errors.full_messages.join(',') }, status: 422
      end
    end
  
    def destroy
      @profile.destroy
    end
  
    private
      def set_profile
        @profile = Profile.find(params[:id])
      end
  
      def profile_params
        params.require(:profile).permit(:first_name, :last_name, :description, :avatar)
      end
  
  end
  