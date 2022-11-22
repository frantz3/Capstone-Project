class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User
        .find_by(email: params["user"]["email"])
        .try(:authenticate, params["user"]["password"])
         if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else
            render json: {status: 401}
         end
    end
    
    def destroy
      session.delete :user_id
      head :no_content
    end


end
