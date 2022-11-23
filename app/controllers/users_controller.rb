class UsersController < ApplicationController
    skip_before_action :authorize
    def index
        users = User.all
        render json: users
    end

    def create
    user = User.create(user_params)
# binding.pry
    if user && user.valid?

        session[:user_id] = user.id
        
        render json: user, status: :created
    else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity

    end
end

    private

    def user_params
        params.permit(:username, :email, :first_name, :last_name, :password, :password_confirmation)
    end
end
