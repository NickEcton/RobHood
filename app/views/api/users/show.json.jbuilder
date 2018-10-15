json.extract! @user, :username, :id, :portfolio
json.extract! @user.portfolio, :orders
