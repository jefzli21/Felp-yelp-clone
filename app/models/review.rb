# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          not null
#  biz_id     :bigint           not null
#  author_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

    validates :body, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :biz_id, uniqueness: {scope: :author_id , message: "Cannot review the same business twice"}
    

    belongs_to :business,
        class_name: :Business,
        foreign_key: :biz_id

    belongs_to :author,
        class_name: :User
        
    
    
    
end
