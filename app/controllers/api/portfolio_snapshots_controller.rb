class Api::PortfolioSnapshotsController < ApplicationController

  def create
    @portfolio_snapshot = PortfolioSnapshot.new(port_params)
  end

  def show
    @portfolio_snapshots = PortfolioSnapshot.where(portfolio_id: params[:id])
    debugger

    render json: @portfolio_snapshots
  end

  def port_params
    params.require(:portfolio_snapshot).permit(:date, :value, :portfolio_id)
  end
end
