class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: :create
  wrap_parameters include: Business.attribute_names + [:ownerId]
#get request, /api/businesses?query= banana

  def search
    query = params[:query]
    @businesses = Business.where("biz_name ILIKE ? OR biz_type ILIKE ?", "%#{query}%", "%#{query}%")
    if @businesses.length > 0
    render :index
    else
      render :index
    end
  end

  def show
    @business = Business.find(params[:id])
  end
  
  def create
    @business = Business.new(business_params)
    if @business.save
      render :show
    else
      render json: {errors: @business.errors_full_messages}, status: 422
    end

  end

  private

  def business_params
    params.require(:business).permit(:biz_name, :biz_type, :address, :hours, :about, :feature, :phone, :owner_id, :long, :lat, :website)
  end

  
end
