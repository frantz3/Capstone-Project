class WorkoutExerciseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :exercise
  has_one :workout
end
