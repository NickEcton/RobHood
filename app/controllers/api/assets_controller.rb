class Api::AssetsController < ApplicationController

  def index
    @assets = Asset.all
    render "api/assets/index"
  end

  def show
    asset_ids = params[:id].split(",").map(&:to_i)
    @assets = []
    asset_ids.each do |ass|
      @assets.push(Asset.find(ass).Symbol)
    end
    render json: @assets
  end

end
