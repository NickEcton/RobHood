class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :asset_id, null: false
      t.integer :portfolio_id, null: false
      t.integer :price, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :orders, :asset_id
    add_index :orders, :portfolio_id
  end
end
