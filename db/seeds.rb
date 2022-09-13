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
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('businesses')


    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'foodhelper', 
      email: 'foodhelper@user.io', 
      password: 'password'
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
      hours: 'M-T-W-Th-F, 10am - 10pm',
      about: 'we make you happy and obese',
      feature: 'disability, air condition, accessible ramp',
      phone: 123456789,
      owner_id: 1,
      long: 100,
      lat: 100,
      website: "www.lmao.com"
    )

    b1.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/mc.jpg"),
      filename: "mc.jpg"
    )

    b2 = Business.create!(
      biz_name: 'Burger King',
      biz_type: '$$ - fast food',
      address: '321 burger street, CA 90024',
      hours: 'M-T-W-Th-F, 10am - 10pm',
      about: 'we make you burger and happiness',
      feature: 'disability, air condition, accessible ramp',
      phone: 123456789,
      owner_id: 2,
      long: 100,
      lat: 100,
      website: "www.burgerking.com"
    )

    b3 = Business.create!(
      biz_name: 'Wendys',
      biz_type: '$$ - fast food',
      address: '423 wend street, CA 90024',
      hours: 'M-T-W-Th-F, 10am - 10pm',
      about: 'we make you happy',
      feature: 'disability, air condition, accessible ramp',
      phone: 123456789,
      owner_id: 3,
      long: 100,
      lat: 100,
      website: "www.wendys.com"
    )

    puts "DONE!"

 
  r1 = Review.create!(
    rating: 3,
    body: 'I dont really like fast food honestly',
    biz_id: 1,
    author_id: 1,
    
  )