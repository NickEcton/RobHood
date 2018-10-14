class Api::PortfoliosController < ApplicationController

  def create
    @portfolio = Portfolio.new(portfolio_params)
    if @portfolio.save
  end

  def update
    @portfolio = Portfolio.find_by(user_id: current_user.id)
  end


  def portfolio_params
    params.require(:portfolio).permit(:user_id)
  end
end
