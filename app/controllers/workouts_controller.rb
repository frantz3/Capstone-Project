class WorkoutsController < ApplicationController
    def index
        workouts = Workout.all
        render json: workouts
    end

    def show
        workouts = Workout.find_by(id: params[:id])
        render json: workouts
    end

    def update
        workouts = Workout.find_by(id: params[:id])
        workouts.update(workout_params)
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
