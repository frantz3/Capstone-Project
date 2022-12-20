class WorkoutsController < ApplicationController
  
    def index
        user = User.find(session[:user_id])
   
        render json: user.workouts.uniq {|w| [w.name] }
       
    end

    def create
        workout = Workout.new(workout_params)
    
        workout.user_id = session[:user_id]
        workout.save
       
   
   
        render json: workout
    end

    def show
        workouts = Workout.find_by(id: params[:id])
        render json: workouts
    end

    def update
        user = User.find(session[:user_id])
   
        workouts = user.workouts.filter do |w|
            w.name == params[:old_name]
        end
   
        workouts.each do |w| 
            w.update(name: params[:name])
        end
      
        render json: {old_name: params[:old_name], name: params[:name]}, status: :ok

    end

    def destroy
        user = User.find(session[:user_id])
        workouts = user.workouts.filter do |w|
            w.name == params[:name]
        end
 
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
