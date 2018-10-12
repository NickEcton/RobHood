class Asset < ApplicationRecord
  validates :Symbol, presence: true, uniqueness: true
  validates :Company, presence: true, uniqueness: true
end
