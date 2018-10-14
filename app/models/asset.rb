class Asset < ApplicationRecord
  validates :Symbol, presence: true, uniqueness: true
  validates :Company, presence: true, uniqueness: true

  has_many :orders,
  foreign_key: :asset_id,
  class_name: :Order
end
