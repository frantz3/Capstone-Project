class CreateCalcs < ActiveRecord::Migration[7.0]
  def change
    create_table :calcs do |t|
      t.integer :age
      t.string :gender
      t.integer :weight
      t.integer :height
      t.integer :neck
      t.integer :waist
      t.integer :hip
    end
  end
end
