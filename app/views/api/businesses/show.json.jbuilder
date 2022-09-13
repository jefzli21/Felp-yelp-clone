
json.business do
    json.partial! 'business', business: @business
    
end

json.reviews do
    @business.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :rating, :body,:biz_id,:author_id, :id
            json.author review.author.username
        end
    end
end





# json.photoUrl url_for(business.photo)