class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
    user = User.create(user_params)

    if user && user.valid?

        session[:user_id] = user.id
        
        render json: user, status: :created
    else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity

    end
end

    private

    def user_params
        params.require(:user).permit(:username, :email, :first_name, :last_name, :password, :password_confirmation)
    end
end
