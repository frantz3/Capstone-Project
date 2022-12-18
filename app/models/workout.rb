class Workout < ApplicationRecord
    belongs_to :user
    belongs_to :exercise, optional: true

    # validates :name, presence: true, length: { maximum: 20}
end
