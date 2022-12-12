class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name
belongs_to :exercise
end
