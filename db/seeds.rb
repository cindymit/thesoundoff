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

@cindy = User.create!(username: 'Cindy1', email: 'Cindy1@email.com', password: 'abc123')
@nadia = User.create!(username: 'Nadia1', email: 'Nadia1@email.com', password: 'abc123')
@katie = User.create!(username: 'Katie1', email: 'Katie1@email.com', password: 'abc123')

puts "#{User.count} users created"

@good_for_you = Song.create!(artist: 'Olivia Rodrigo', title: 'good 4 u', genre: 'POP', album: 'Sour', year_released: '2021', image_url: 'https://images-na.ssl-images-amazon.com/images/I/41CBIdGrBpS.jpg', user: @cindy)

@bad_boy = Song.create!(artist: 'Billie Eilish', title: 'Bad Boy', genre: 'Alternative', album: 'When We All Fall Asleep, Where Do We Go?', year_released: '2019', image_url: 'https://images-na.ssl-images-amazon.com/images/I/71SHkMeVdhL._SX466_.jpg', user: @nadia)

@butter = Song.create!(artist: 'BTS', title: 'Butter', genre: 'K-POP', album: 'Butter', year_released: '2021', image_url: 'https://images-na.ssl-images-amazon.com/images/I/61vPc3NkBXS._AC_UL600_SR600,600_.jpg', user: @katie)

@safaera = Song.create!(artist: 'Bad Bunny', title: 'Safaera', genre: 'Reggaeton', album: 'YHLQMDLG', year_released: '2020', image_url: 'https://media.pitchfork.com/photos/5e5d895d19382e0008724f89/1:1/w_600/YHLQMDLG_Bad%20Bunny.jpg', user: @cindy)

@levitating = Song.create!(artist: 'Dua Lipa feat. DaBaby', title: 'Levitating', genre: 'POP', album: 'N/A', year_released: '2020', image_url: 'https://m.media-amazon.com/images/I/51U6nvJqXGS._AC_SX466_.jpg', user: @nadia)

@leave_the_door_open = Song.create!(artist: 'Bruno Mars, Anderson .Paak, & Silk Sonic', title: 'Leave The Door Open - Single', genre: 'R&B', album: 'N/A', year_released: '2021', image_url: 'https://images-na.ssl-images-amazon.com/images/I/81Q5sUh0asL._AC_UL600_SR600,600_.jpg', user: @katie)

@juicy = Song.create!(artist: 'The Notorious B.I.G.', title: 'Juicy', genre: 'HIP-HOP', album: 'Life After Death', year_released: '1997', image_url: 'https://images-na.ssl-images-amazon.com/images/I/51F1xs1aGKL.jpg', user: @cindy)

@lovesick_girl = Song.create!(artist: 'BLACKPINK', title: 'Lovesick Girls', genre: 'K-POP', album: 'The Album', year_released: '2020', image_url: 'https://m.media-amazon.com/images/I/41WERkcBykS._AC_SX466_.jpg', user: @nadia)

puts "#{Song.count} songs created"

Comment.create!(user: @cindy, content: 'I love this song!', song: @good_for_you)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @good_for_you)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @good_for_you)

comment = Comment.create!(user: @cindy, content: 'I love this song!', song: @bad_boy)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @bad_boy)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @bad_boy)

Comment.create!(user: @cindy, content: 'I love this song!', song: @butter)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @butter)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @butter)

Comment.create!(user: @cindy, content: 'I love this song!', song: @safaera)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @safaera)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @safaera)

Comment.create!(user: @cindy, content: 'I love this song!', song: @levitating)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @levitating)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @levitating)

Comment.create!(user: @cindy, content: 'I love this song!', song: @leave_the_door_open)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @leave_the_door_open)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @leave_the_door_open)

Comment.create!(user: @cindy, content: 'I love this song!', song: @juicy)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @juicy)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @juicy)

Comment.create!(user: @cindy, content: 'I love this song!', song: @lovesick_girl)
Comment.create!(user: @nadia, content: 'SONG OF THE YEAR!', song: @lovesick_girl)
Comment.create!(user: @katie, content: 'No other song can compare!', song: @lovesick_girl)

puts "#{Comment.count} comments created"