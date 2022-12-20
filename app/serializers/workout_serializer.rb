class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :exercise_id
belongs_to :exercise
end
