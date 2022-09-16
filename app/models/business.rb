# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  biz_name   :string           not null
#  biz_type   :string           not null
#  address    :string           not null
#  hours      :string           not null
#  about      :text             not null
#  feature    :string           not null
#  phone      :integer          not null
#  owner_id   :bigint           not null
#  long       :float            not null
#  lat        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  website    :text             not null
#
class Business < ApplicationRecord
    validates :biz_name, :biz_type, :address, :hours, :about, :feature, :phone, :owner_id, :long, :lat, presence: true
    
    belongs_to :owner, class_name: :User
    has_one_attached :photo
    
    has_many :reviews,
        foreign_key: :biz_id,
        dependent: :destroy,
        class_name: :Review

    def average_rating 
        average = reviews.average(:rating)
        average && average.round(1)
    end
    
end
