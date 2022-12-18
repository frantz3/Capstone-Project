class WorkoutsController < ApplicationController
  
    def index
        user = User.find(session[:user_id])
   
        render json: user.workouts.uniq {|w| [w.name] }
        # user.workouts.uniq! {|w| w[:name ]} the goal is to make a unique array of workout
    end

    def create
        workout = Workout.new(workout_params)
        # binding.pry
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
        user = User.find(session[:user_id])
        workouts = user.workouts.filter do |w|
            w.name == params[:name]
        end
        # binding.pry
        workouts.each do |workout|
            workout.destroy
        end

        head :no_content
      end

      def add_exercise
        workout = Workout.create(name: params[:name], user_id: session[:user_id], exercise_id: params[:exercise_id])

        render json: workout, status: :created
      end

    private
    
    def workout_params
    params.permit(:name)
    end
end
