class Workout < ApplicationRecord
    has_many :exercises

    validates :exercises, presence: true
end
