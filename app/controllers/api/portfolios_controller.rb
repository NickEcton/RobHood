class Api::PortfoliosController < ApplicationController

  def update
    @portfolio = Portfolio.find_by(user_id: current_user.id)
  end

  def show
    @portfolio = Portfolio.find_by(user_id: current_user.id)
    render "api/portfolios/show"
  end

  def portfolio_params
    params.require(:portfolio).permit(:user_id)
  end

  def order_params
    params.require(:order).permit(:asset_id, :portfolio_id)
  end
end
