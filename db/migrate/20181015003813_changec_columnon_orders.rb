class ChangecColumnonOrders < ActiveRecord::Migration[5.2]
  def change
    change_column :orders, :asset_id, :string
  end
end
