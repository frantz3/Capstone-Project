class WorkoutsController < ApplicationController
  
    def index
        workouts = Workout.all
        render json: workouts
    end

    def create
        workout = Workout.new(workout_params)
        workout.user_id = session[:user_id]
        workout.save
        # binding.pry
     
        render json: workout
        end

    def show
        workouts = Workout.find_by(id: params[:id])
        render json: workouts
    end

    def update
        workouts = Workout.where(name: params[:old_name])
        # binding.pry
        workouts.each do |w| 
            w.update(name: params[:name])
        end

        render json: workouts

    end

    def destroy
        workouts = Workout.find_by(id: params[:id])
        workouts.destroy
        head :no_content
      end

    private
    
    def workout_params
    params.permit(:name)
    end
end
