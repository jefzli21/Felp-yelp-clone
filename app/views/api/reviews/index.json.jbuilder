
@reviews.each do |review|
    json.set! review.id do
        json.partial! 'review', review: review
        json.business review.business.biz_name
        json.photo_urls review.photos.map{|photo| photo.url}
    end
end
