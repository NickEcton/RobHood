class CreateAssets < ActiveRecord::Migration[5.2]
  def change
    create_table :assets do |t|
      t.string :Symbol, null: false
      t.string :Company, null: false
      t.timestamps
    end
    add_index :assets, :Symbol
  end
end
