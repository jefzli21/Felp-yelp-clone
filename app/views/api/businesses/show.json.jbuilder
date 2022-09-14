
json.business do
    json.partial! 'business', business: @business
    
end

json.reviews do
    @business.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :rating, :body,:biz_id,:author_id, :id, :created_at
            json.author review.author.username
            json.photo_urls review.photos.map{|photo| photo.url}
        end
    end
end





# json.photoUrl url_for(business.photo)