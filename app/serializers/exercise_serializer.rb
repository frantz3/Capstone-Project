class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :bodypart, :equipment, :gifUrl, :target
end
