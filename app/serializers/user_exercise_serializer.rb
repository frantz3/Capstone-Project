class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :exercise
  has_one :user
end
