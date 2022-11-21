class Workout < ApplicationRecord
    belongs_to :user
    belongs_to :exercise

    # validates :exercise, presence: true
end
