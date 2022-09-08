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
#  phone      :bigint           not null
#  long       :bigint           not null
#  lat        :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Business < ApplicationRecord
    
    
    
    
end
