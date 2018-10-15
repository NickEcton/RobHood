class Order < ApplicationRecord
  validates :asset_id, presence: true
  validates :portfolio_id, presence: true
  validates :price, presence: true
  validates :quantity, numericality: { other_than: 0 }

  belongs_to :portfolio,
  foreign_key: :portfolio_id,
  class_name: :Portfolio

  belongs_to :asset,
  foreign_key: :asset_id,
  class_name: :Asset
end
