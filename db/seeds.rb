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



end


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

    
    puts "Creating businesses"

    b1 = Business.create!(
      biz_name: 'McDonalds',
      biz_type: '$$ - fast food',
      address: '235 Front St, San Francisco, CA 94111',
      hours: 'M-T-W-Th-F  10am - 10pm',
      about: 'we make you happy and obese',
      feature: 'Disability, Air Condition, Accessible Ramp',
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
      feature: 'Disability, Air Condition, Accessible Ramp, Parking',
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
      biz_type: '$$ - fast food, American, Fried Chicken',
      address: '7401 Mission St, Daly City, CA 94014',
      hours: 'M-T-W-Th-F  10am - 9pm',
      about: 'we make you happy with our food!',
      feature: 'Disability, Air Condition, Accessible Ramp, Indoor Parking',
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




    
    b4 = Business.create!(
      biz_name: "Beretta",
      biz_type: '$$ - Italian',
      address: '1199 Valencia St, San Francisco, CA 94110',
      hours: 'M-T-W-Th-F  5pm - 11pm',
      about: 'Its the best pasta and pizza in town!',
      feature: 'Disability, Air Condition, Accessible Ramp, Indoor Parking, Health Score Pass ',
      phone: 1239059122,
      owner_id: 4,
      long: -122.42069896992624,
      lat: 37.75384148286603,
      website: "www.berettasf.com"
    )
    

    b4.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/ber.jpg"),
      filename: "ber.jpg"
    )

    
    
    rber1 = Review.create!(
      rating: 5,
      body: 'I have never been a place so good like beretta, it got everything you could wish for in an italian restaurant',
      biz_id: 4,
      author_id: 6
    )


        
    rber2 = Review.create!(
      rating: 4,
      body: 'MaMaMia, this is the best pasta I have ever had',
      biz_id: 4,
      author_id: 7
    )

    rber3 = Review.create!(
      rating: 5,
      body: 'If there is heaven, this is the place',
      biz_id: 4,
      author_id: 8
    )
    
    ber1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ber1.jpg'), filename:'ber1.jpg'}
    ber2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ber2.jpg'), filename:'ber2.jpg'}
    ber3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ber3.jpg'), filename:'ber3.jpg'}
    ber4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ber4.jpg'), filename:'ber4.jpg'}
    ber5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ber5.jpg'), filename:'ber5.jpg'}

    
    rber1.photos.attach([ber1,ber2])
    rber2.photos.attach([ber3])
    rber3.photos.attach([ber4,ber5])

    
    
        
    b5 = Business.create!(
      biz_name: "Little Szechuan",
      biz_type: '$$ - Chinese',
      address: '501 Broadway St San Francisco, CA 94133',
      hours: 'M-T-W-Th-F  11am - 10pm',
      about: 'Spicy and flavorful food from Szechuan recreated for you here at San Francisco!',
      feature: 'Disability, Air Condition, Accessible Ramp, Health Score Pass, Offers Takeout ',
      phone: 1156966666,
      owner_id: 5,
      long: -122.40566003424875,
      lat: 37.79812724542803,
      website: "https://www.littleszechuan-sf.com/"
    )
    

    b5.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/ls.jpg"),
      filename: "ls.jpg"
    )

    
    
    rls1 = Review.create!(
      rating: 5,
      body: 'The Spice! The Flavor! The Passion!',
      biz_id: 5,
      author_id: 1
    )


        
    rls2 = Review.create!(
      rating: 4,
      body: 'This is some authentic Chinese food right here',
      biz_id: 5,
      author_id: 2
    )

    rls3 = Review.create!(
      rating: 5,
      body: 'I love their red bruised pork',
      biz_id: 5,
      author_id: 9
    )
    
    ls1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ls1.jpg'), filename:'ls1.jpg'}
    ls2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ls2.jpg'), filename:'ls2.jpg'}
    ls3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ls3.jpg'), filename:'ls3.jpg'}
    ls4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ls4.jpg'), filename:'ls4.jpg'}
    ls5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ls5.jpg'), filename:'ls5.jpg'}

    
    rls1.photos.attach([ls1,ls2])
    rls2.photos.attach([ls3])
    rls3.photos.attach([ls4,ls5])
    
    



    b6 = Business.create!(
      biz_name: "Lovejoy's Tea Room",
      biz_type: '$$$ - British',
      address: '1351 Church St San Francisco, CA 94114',
      hours: 'M-T-W-Th-F  11am - 3pm',
      about: "Best place in town for a nice afternoon teatime!",
      feature: 'Disability, Air Condition, Accessible Ramp, Health Score Pass, Offers Takeout ',
      phone: 1156977777,
      owner_id: 6,
      long:  -122.426743122483,
      lat: 37.75166076711009,
      website: "https://www.lovejoystearoom.com/"
    )
    

    b6.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/ljt.jpg"),
      filename: "ljt.jpg"
    )

    
    
    rljt1 = Review.create!(
      rating: 5,
      body: ' Very Elegant Spot to have afternoon tea time!',
      biz_id: 6,
      author_id: 1
    )

    rljt2 = Review.create!(
      rating: 5,
      body: 'I am British and this place makes me feel like home',
      biz_id: 6,
      author_id: 3
    )

    rljt3 = Review.create!(
      rating: 5,
      body: ' I cannot live without their deserts because they are so gooooood! ',
      biz_id: 6,
      author_id: 5
    )


  
    
    ljt1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ljt1.jpg'), filename:'ljt1.jpg'}
    ljt2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ljt2.jpg'), filename:'ljt2.jpg'}
    ljt3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ljt3.jpg'), filename:'ljt3.jpg'}
    ljt4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ljt4.jpg'), filename:'ljt4.jpg'}
    ljt5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/ljt5.jpg'), filename:'ljt5.jpg'}

    
    rljt2.photos.attach([ljt1,ljt2,ljt3])
    rljt3.photos.attach([ljt4,ljt5])
    
    
    
    b7 = Business.create!(
      biz_name: "Suppenküche",
      biz_type: '$$$ - German',
      address: '525 Laguna St, San Francisco, CA 94102',
      hours: 'M-T-W-Th-F  3pm - 10pm',
      about: "Find your hometown flavor from Germany in here!",
      feature: 'Disability, Air Condition, Accessible Ramp, Health Score Pass, Offers Takeout ',
      phone: 115698888,
      owner_id: 7,
      long: -122.42606908884302,
      lat: 37.77884718660481,
      website: "https://www.suppenkuche.com/"
    )
    

    b7.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/sup.jpg"),
      filename: "sup.jpg"
    )
    

    rsup1 = Review.create!(
      rating: 3,
      body: ' I smell German in here, but it is a bit too crowded!',
      biz_id: 7,
      author_id: 4
    )

    rsup2 = Review.create!(
      rating: 4,
      body: ' It instantly takes me back home with this flavor omg',
      biz_id: 7,
      author_id: 7
    )

    sup1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/sup1.jpg'), filename:'sup1.jpg'}
    sup2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/sup2.jpg'), filename:'sup2.jpg'}
    sup3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/sup3.jpg'), filename:'sup3.jpg'}
    sup4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/sup4.jpg'), filename:'sup4.jpg'}
    sup5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/sup5.jpg'), filename:'sup5.jpg'}

    rsup1.photos.attach([sup1,sup2,sup3])
    rsup2.photos.attach([sup4,sup5])




    b8 = Business.create!(
      biz_name: "The Cavalier",
      biz_type: '$$$ - British',
      address: '360 Jessie St San Francisco, CA 94103',
      hours: 'M-T-W-Th-F  3pm - 10pm',
      about: "Best British food located in San Francisco!",
      feature: 'Disability, Air Condition, Accessible Ramp, Health Score Pass, Offers Takeout ',
      phone: 115699999,
      owner_id: 8,
      long: -122.40697184422173,
      lat: 37.78354786334749,
      website: "https://www.thecavaliersf.com"
    )


    b8.photo.attach(
      io: URI.open("https://felp-dev.s3.us-west-1.amazonaws.com/business/tc.jpg"),
      filename: "tc.jpg"
    )

    rtc1 = Review.create!(
      rating: 5,
      body: ' Great British food, Cant believe I can find such a place in America!',
      biz_id: 8,
      author_id: 3
    )


    rtc2 = Review.create!(
      rating: 4,
      body: ' Its alright, but the decoration of the place makes me feel like home. Its also a bit pricy',
      biz_id: 8,
      author_id: 2
    )

    rtc3 = Review.create!(
      rating: 3,
      body: ' This place is a rip-off, they charge you 10 dollars for bread sticks! That is ridiculous',
      biz_id: 8,
      author_id: 5
    )

    tc1 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/tc1.jpg'), filename:'tc1.jpg'}
    tc2 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/tc2.jpg'), filename:'tc2.jpg'}
    tc3 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/tc3.jpg'), filename:'tc3.jpg'}
    tc4 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/tc4.jpg'), filename:'tc4.jpg'}
    tc5 = {io: URI.open('https://felp-dev.s3.us-west-1.amazonaws.com/business/tc5.jpg'), filename:'tc5.jpg'}

    rtc1.photos.attach([tc1])
    rtc2.photos.attach([tc2])
    rtc3.photos.attach([tc3,tc4,tc5])

    
    puts "Done!"

 
 
  puts "Attaching Photos"
  puts "Done!"