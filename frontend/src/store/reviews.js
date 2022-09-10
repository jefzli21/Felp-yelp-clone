import csrfFetch from "./csrf";


const ADD_REVIEW = 'reviews/ADD_REVIEW'
const ADD_REVIEWS = 'reviews/ADD_REVIEWS'
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const addReview = review => ({
    type: ADD_REVIEW,
    review
})



const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})


export const addReviews = reviews => ({
    type: ADD_REVIEWS,
    reviews
})


export const getBizReviews = bizId => state =>{
    
    if(!state.reviews){
        return []
    }else{
        return  Object.values(state.reviews)
    }
       
    
};

export const createReview = (review) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify(review)
    });

    const data = await res.json();
    dispatch(addReview(data));
    return data
}


export const updateReview = (review) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    });

    const data = await res.json();
    dispatch(addReview(data));
}


export const deleteReview = (reviewId) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: 'DELETE'
    });
    dispatch(removeReview(reviewId));
}


function reviewsReducer(state = {}, action) {
    Object.freeze(state)
    const nextState = {...state}

    switch(action.type){
        case ADD_REVIEW: 
            nextState[action.review.id] = action.review;
            return nextState;
        case ADD_REVIEWS:
            return action.reviews;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
            return nextState;
        default:
            return state;

    }
}
    
    
export default reviewsReducer;