class Exercise < ApplicationRecord
    has_many :workouts
    has_many :users, through: :workouts

    validates :name, :bodypart, :equipment, :target, presence: true
end
