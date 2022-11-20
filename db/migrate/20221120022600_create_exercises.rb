class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :bodypart
      t.string :equipment
      t.string :gifUrl
      t.string :target

      t.timestamps
    end
  end
end
