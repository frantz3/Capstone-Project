class ExercisesController < ApplicationController
    def index
        exercise = Exercise.all
        render json: exercise
    end

    def create
        exercise = Exercise.create(exercise_params)
        render json: exercise
        end
    
        def show
            exercise = Exercise.find_by(id: params[:id])
            render json: exercise
        end

        def update
            exercise = Exercise.find_by(id: params[:id])
            exercise.update(exercise_params)
            render json: exercise
        end

        def destroy
            exercise = Exercise.find_by(id: params[:id])
            exercise.destroy
            head :no_content
          end
        
        private
    
        def exercise_params
            params.permit(:name, :bodypart, :equipment, :gifUrl, :target)
        end
end

# t.string "name"
# t.string "bodypart"
# t.string "equipment"
# t.string "gifUrl"
# t.string "target"