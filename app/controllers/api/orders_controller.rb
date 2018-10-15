class Api::OrdersController < ApplicationController

  def create
    @portfolio = Portfolio.find_by(id: order_params[:portfolio_id])
    asset = Asset.find_by(Symbol: order_params[:asset_symbol])

    @order = Order.new("asset_id": asset.id, "portfolio_id": order_params[:portfolio_id], "price": order_params[:price], "quantity": order_params[:quantity])

    @order.save

    render "api/portfolios/show"
  end

  def order_params
    params.require(:order).permit(:asset_id, :portfolio_id, :quantity, :price, :asset_symbol)
  end
end
