# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all

Recipe.create(title: "Rum Banana Bread", description: "Delicious, sweet, moist, vegan, with a hint of tasty spices.", rating:4.4, source: "https://www.badmanners.com/recipes/rum-banana-bread", author: "Bad Manners Kitchen")
Recipe.create(title: "Pumpkin Chili", description: "Hearty, yummy, autumnal meal.", rating:2.8, source: "https://www.badmanners.com/recipes/pumpkin-chili", author: "Bad Manners Kitchen")
Recipe.create(title: "Roasted Chickpea Broccoli Burritos", description: "The most delicious vegan burrito you can fathom.", rating:5.5, source: "https://www.badmanners.com/recipes/roasted-chickpea-and-broccoli-burrito", author: "Bad Manners Kitchen")
Recipe.create(title:  "Garlic Sriracha Noodles", description: "Tasty meal for tasty people.", rating:3.3, source: "https://www.badmanners.com/recipes/garlic-sriracha-noodles", author: "Bad Manners Kitchen")
Recipe.create(title: "Grilled Romaine Salad", description: "Better than a salad, healthier than most grilled things.", rating:3.0, source: "https://www.badmanners.com/recipes/grilledromaine", author: "Bad Manners Kitchen")


