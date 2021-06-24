# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Song.destroy_all
User.destroy_all

@user = User.create!(username: 'Cindy1', email: 'Cindy1@email.com', password: 'abc123')

puts "#{User.count} users created"

@butter = Song.create!(artist: 'BTS', title: 'Butter', genre: 'KPOP', album: 'Butter', year_released: '2021', image_url: 'http://www.google/com/bts.jpeg', user: @user)

puts "#{Song.count} songs created"

@comment = Comment.create!(user: @user, content: 'Their best song ever!', song: @butter)

puts "#{Comment.count} comments created"