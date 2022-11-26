class Workout < ApplicationRecord
    belongs_to :user
    belongs_to :exercise

    validates :name, presence: true,  length: { maximum: 20}
end
