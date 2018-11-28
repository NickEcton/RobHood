# json.symbols @assets.map { |el| el.Symbol}
json.array! @assets do |asses|
  # json.extract! asses, :Symbol
  asses.Symbol
end
