json.array! @items do |item|
  json.id item.id
  json.name item.name
  json.hometown item.hometown
  json.picture item.picture

  json.restaurants do
    json.array! item.restaurants do |restaurant|
      json.id restaurant.id
      json.name restaurant.name
      json.location restaurant.location
      json.occurs_on restaurant.occurs_on
    end
  end
end
