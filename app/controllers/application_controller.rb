class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user, :current_portfolio, :current_orders

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    current_user = user
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def current_portfolio
    @current_portfolio ||=
    Portfolio.find_by(user_id: @current_user.id)
  end

  def current_orders
    Order.where(portfolio_id: @current_portfolio.id)
  end

end
