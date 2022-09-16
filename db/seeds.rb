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

    u4 = User.create!(
      username: 'Kelvin', 
      email: 'Kelvin@user.com', 
      password: 'password'
    )

    u4.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person4.jpg"),
      filename: "person4.jpg"
    )

    u5 = User.create!(
      username: 'Melody', 
      email: 'melody@user.com', 
      password: 'password'
    )

    u5.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person5.jpg"),
      filename: "person5.jpg"
    )

    u6 = User.create!(
      username: 'Ginger', 
      email: 'ginger@user.com', 
      password: 'password'
    )

    u6.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person6.jpg"),
      filename: "person6.jpg"
    )

    u7 = User.create!(
      username: 'Harry', 
      email: 'harry@user.com', 
      password: 'password'
    )

    u7.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person7.jpg"),
      filename: "person7.jpg"
    )

    u8 = User.create!(
      username: 'Malfoy', 
      email: 'malfoy@user.com', 
      password: 'password'
    )

    u8.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person8.jpg"),
      filename: "person8.jpg"
    )

    u9 = User.create!(
      username: 'WonderWowan', 
      email: 'wonderwowan@user.com', 
      password: 'password'
    )

    u9.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person9.jpg"),
      filename: "person9.jpg"
    )

    u10 = User.create!(
      username: 'Bruce', 
      email: 'bruce@user.com', 
      password: 'password'
    )

    u10.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/user/person10.jpg"),
      filename: "person10.jpg"
    )


    # More users
    # 10.times do 
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end
  
    puts "Done!"
  end
    
    puts "Creating businesses"

    b1 = Business.create!(
      biz_name: 'McDonalds',
      biz_type: '$$ - fast food',
      address: '235 Front St, San Francisco, CA 94111',
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


    rm1 = Review.create!(
      rating: 3,
      body: 'I dont really like fast food honestly',
      biz_id: 1,
      author_id: 1,
      
    )
  
    rm2 = Review.create!(
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
  
    rm1.photos.attach([mc,mc1,mc2,mc3])
    rm2.photos.attach([mc4,mc5,mc6])








    b2 = Business.create!(
      biz_name: 'Burger King',
      biz_type: '$$ - fast food',
      address: '35 Powell St, San Francisco, CA 94102',
      hours: 'M-T-W-Th-F  10am - 10pm',
      about: 'we make you burger and happiness, we are Burp King',
      feature: 'disability, air condition, accessible ramp , parking',
      phone: 1041994021,
      owner_id: 2,
      long: -122.40780489479005,
      lat: 37.78619309259152,
      website: "www.bk.com"
    )

    b2.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/bk.jpg"),
      filename: "bk.jpg"
    )

    rb1 = Review.create!(
      rating: 2,
      body: 'Their burgers are disgusting, OMG I will never come here again',
      biz_id: 2,
      author_id: 3
    )

    rb2 = Review.create!(
      rating: 3,
      body: 'Its okay, they are not the best, but neither are the worst',
      biz_id: 2,
      author_id: 4
    )

    rb3 = Review.create!(
      rating: 1,
      body: 'Why does this store even exists? its so bad',
      biz_id: 2,
      author_id: 5
    )

    bk1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/bk1.jpg'), filename:'bk1.jpg'}
    bk2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/bk2.jpg'), filename:'bk2.jpg'}
    bk3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/bk3.jpg'), filename:'bk3.jpg'}
    bk4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/bk4.jpg'), filename:'bk4.jpg'}
    bk5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/bk5.jpg'), filename:'bk5.jpg'}

    rb1.photos.attach([bk1,bk2,bk3])
    rb3.photos.attach([bk4,bk5])




    b3 = Business.create!(
      biz_name: "Wendy's",
      biz_type: '$$ - fast food',
      address: '7401 Mission St, Daly City, CA 94014',
      hours: 'M-T-W-Th-F  10am - 9pm',
      about: 'we make you happy with our food!',
      feature: 'disability, air condition, accessible ramp, indoor parking',
      phone: 1949294424,
      owner_id: 3,
      long: -122.46366506747985,
      lat: 37.69345768430718,
      website: "www.wendys.com"
    )

    b3.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/wendy.jpg"),
      filename: "wendy.jpg"
    )



    rw1 = Review.create!(
      rating: 5,
      body: 'Wendy is the best, I will give it 5 stars',
      biz_id: 3,
      author_id: 1
    )

    rw2 = Review.create!(
      rating: 1,
      body: 'Wendy is the worst, I will give it 1 stars',
      biz_id: 3,
      author_id: 6
    )

    rw3 = Review.create!(
      rating: 3,
      body: 'Wendy is the meh, I will give it 3 stars',
      biz_id: 3,
      author_id: 3
    )


    w1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/w1.jpg'), filename:'w1.jpg'}
    w2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/w2.jpg'), filename:'w2.jpg'}
    w3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/w3.jpg'), filename:'w3.jpg'}
    w4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/w4.jpg'), filename:'w4.jpg'}
    w5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/w5.jpg'), filename:'w5.jpg'}


    rw1.photos.attach([w1,w2])
    rw2.photos.attach([w3,w4])
    rw3.photos.attach([w5])




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    puts "Done!"

 
 
  puts "Attaching Photos"
  puts "Done!"