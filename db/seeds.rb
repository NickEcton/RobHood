# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




require 'csv'

# csv_text = File.read(Rails.root.join('lib', 'seeds', 'companylist.csv'))
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# puts csv_text
#
array = []
result = []

File.foreach(Rails.root.join('lib', 'seeds', 'companylist.csv')) do |f|
  array.push([f])
end

array.each do |comp|
  result.push(comp[0].split("\,\\\""))
end
answer = []
result.each do |por|
  answer.push(por[0].split("\,\""))
end

finalTick = []
finalCompanies = []

answer.each do |tickers|
  tick = tickers[0].delete_prefix('"').delete_suffix('"')
  finalTick.push(tick)
end

answer.each do |company_name|
  comp_name = "#{company_name[1]}".chomp('"')
  finalCompanies.push(comp_name)
end

company_hash = Hash.new()

finalTick.each_with_index do |tick, idx|
  company_hash[idx+1] = {"Symbol": finalTick[idx], "Company": finalCompanies[idx]}
end

company_hash.each do |key, value|
  Asset.create(value)
end


prng = Random.new
year = 2013
month = 10
day = 17
value = 4000

while year != 2018
  if day == 30
    month += 1
    day = 0
  end
  if month == 13
    month = 1
    year += 1
  end

  day +=1
  value += prng.rand(-400...500)

  if day < 10
    tempday = "0#{day}"
  else
    tempday = "#{day}"
  end

  if day < 10
    tempmonth = "0#{month}"
  else
    tempmonth = "#{month}"
  end

  if month == 2 && day == 29
    month = 3
    day = 0
  else
    PortfolioSnapshot.create(date: "#{year}-#{tempmonth}-#{tempday}", value: value, portfolio_id: 1)
  end
end
