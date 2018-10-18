class PortfolioSnapshot < ApplicationRecord
  belongs_to :portfolio,
  foreign_key: :portfolio_id,
  class_name: :Portfolio
end
