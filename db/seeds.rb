# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Business.destroy_all
    Review.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('businesses')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')



    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    u1 = User.create!(
      username: 'foodhelper', 
      email: 'foodhelper@user.io', 
      password: 'password'
    )

    u1.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person1.jpg"),
      filename: "person1.jpg"
    )

    u2 = User.create!(
      username: 'foodfinder', 
      email: 'foodfinder@user.com', 
      password: 'password'
    )

    u2.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person2.jpg"),
      filename: "person2.jpg"
    )

    u3 = User.create!(
      username: 'foodgrinder', 
      email: 'foodgrinder@user.com', 
      password: 'password'
    )

    u3.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person3.jpg"),
      filename: "person3.jpg"
    )

    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end
    
    puts "Creating businesses"

    b1 = Business.create!(
      biz_name: 'McDonalds',
      biz_type: '$$ - fast food',
      address: '123 clown street, CA 90024',
      hours: 'M-T-W-Th-F  10am - 10pm',
      about: 'we make you happy and obese',
      feature: 'disability, air condition, accessible ramp',
      phone: 123456789,
      owner_id: 1,
      long: -122.39909297680323,
      lat: 37.79418128176647,
      website: "www.mcdonalds.com"
    )

    b1.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/mc.jpg"),
      filename: "mc.jpg"
    )

    b2 = Business.create!(
      biz_name: 'Burger King',
      biz_type: '$$ - fast food',
      address: '321 burger street, CA 90024',
      hours: 'M-T-W-Th-F  10am - 10pm',
      about: 'we make you burger and happiness',
      feature: 'disability, air condition, accessible ramp',
      phone: 123456789,
      owner_id: 2,
      long: -122.40780489479005,
      lat: 37.78619309259152,
      website: "www.bk.com"
    )

    b2.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/bk.jpg"),
      filename: "bk.jpg"
    )

    b3 = Business.create!(
      biz_name: 'Wendys',
      biz_type: '$$ - fast food',
      address: '423 wendy street, CA 90024',
      hours: 'M-T-W-Th-F  10am - 9pm',
      about: 'we make you happy',
      feature: 'disability, air condition, accessible ramp',
      phone: 123456789,
      owner_id: 3,
      long: -122.46366506747985,
      lat: 37.69345768430718,
      website: "www.wendys.com"
    )

    b3.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/wendy.jpg"),
      filename: "wendy.jpg"
    )

    puts "Done!"

 
  r1 = Review.create!(
    rating: 3,
    body: 'I dont really like fast food honestly',
    biz_id: 1,
    author_id: 1,
    
  )

  r2 = Review.create!(
    rating: 4,
    body: 'I love burgers and fries, but their staff arent that friendly',
    biz_id: 1,
    author_id: 2
  )

  puts "Creating Review"

  mc = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc.jpg'), filename:'mc.jpg'}
  mc1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc1.jpg'), filename:'mc1.jpg'}
  mc2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc2.jpg'), filename:'mc2.jpg'}
  mc3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc3.jpg'), filename:'mc3.jpg'}
  mc4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc4.jpg'), filename:'mc4.jpg'}
  mc5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc5.jpg'), filename:'mc5.jpg'}
  mc6 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/mcdonald/mc6.png'), filename:'mc6.png'}

  r1.photos.attach([mc,mc1,mc2,mc3])
  r2.photos.attach([mc4,mc5,mc6])
  puts "Attaching Photos"
  puts "Done!"