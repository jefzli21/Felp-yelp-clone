class Api::ReviewsController < ApplicationController
    before_action :require_logged_in
    wrap_parameters include: Review.attribute_names + [:reviewId]
    

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages}, status: 422
        end
    end

    def update
        # @review = current_user.reviews.find(params[:id])
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: 422
        end
    end
    

    def destroy
        # @review = current_user.reviews.find(params[:id])
        @review = Review.find(params[:id])
        if !@review
            render json: {message: 'Unauthorized'}, status: 401
            return
        end
        @review.destroy
        render :show

    end





    private

    def review_params
        params.require(:review).permit(:body, :rating, :biz_id, :author_id)
    end
    
    
    
end
