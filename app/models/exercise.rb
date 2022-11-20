class Exercise < ApplicationRecord
    has_many :users
    has_many :workouts, through: :users

end
