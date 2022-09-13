json.partial! 'review', review: @review

json.photoUrls @review.photos.map { |file| url_for(file)}