class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :name
      t.integer :exercise_id
      t.integer :user_id

      t.timestamps
    end
  end
end
