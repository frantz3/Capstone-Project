class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :reps, :sets, :name, :bodypart, :equipment, :gifUrl, :target
end
