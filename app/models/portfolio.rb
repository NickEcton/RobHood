class Portfolio < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :orders,
  foreign_key: :portfolio_id,
  class_name: :Order
end
