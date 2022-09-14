json.partial! 'review', review: @review

json.photo_urls @review.photos.map { |photo| photo.url}
