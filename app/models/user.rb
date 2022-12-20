class User < ApplicationRecord
    has_secure_password
    has_many :calcs
    has_many :workouts
    has_many :exercises, through: :workouts

    validates :email, :username, presence: true, uniqueness: true
end
