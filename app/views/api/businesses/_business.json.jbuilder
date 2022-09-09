json.extract! business,
 :id,
 :biz_name,
 :biz_type,
 :address,
 :hours,
 :about,
 :feature,
 :phone,
 :owner_id,
 :long,
 :lat,
 :website,
 :photo

 json.photo_url business.photo.url 

#  b= Business.first

#  b.photo.attach(io: File.open("/Users/jeffrey/Desktop/AppAcademyMAC/Felp/Felp-yelp-clone/app/assets/images/mc.jpg"), filename: "mc.jpg")