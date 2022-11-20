class User < ApplicationRecord
    has_many :workouts
    has_many :exercises, through: :workouts

    validates :email, :username, presence: true
end
