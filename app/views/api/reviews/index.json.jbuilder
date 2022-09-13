
@reviews.each do |review|
    json.set! review.id do
        json.partial! 'review', review: review
        json.business review.business.biz_name
    end
end
