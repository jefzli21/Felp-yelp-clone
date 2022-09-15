import csrfFetch from "./csrf";
import { RECEIVE_BUSINESS} from "./businesses";


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

export const getReview = (authorId,bizId) => state =>{
    if(!state || !state.reviews){
        return null;
    }else{
        return Object.values(state.reviews).find((review) => review.bizId === bizId && review.authorId === authorId )
    }

}


export const getBizReviews = bizId => state =>{
    if(!state || !state.reviews){
        return []
    }else{
        // if(Object.values(state.reviews).length){
            
            // console.log(Object.values(state.reviews)[0].bizId === parseInt(bizId))
        // }
        // console.log(Object.values(state.reviews).filter((review) => review.bizId))



       let obj= Object.values(state.reviews).filter((review)=> review.bizId === parseInt(bizId))
    //    console.log(obj)
        return obj
    }
};

export const getAuthorReviews = authorId => state =>{
    if(!state || !state.reviews){
        return []
    }else{
        // if(Object.values(state.reviews).length){

            // console.log(Object.values(state.reviews)[0])
        // }
        // console.log(Object.values(state.reviews).filter((review)=> review.authorId === 1))
        
        let ov= Object.values(state.reviews).filter((review)=> review.authorId === parseInt(authorId))
         return ov
    }
    
}


export const fetchReview = (bizId, authorId) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${bizId}?authorId=${authorId}`);
    const data = await res.json();
    dispatch(addReview(data));
}

export const fetchReviews = () => async dispatch =>{
    const res = await csrfFetch(`/api/reviews`)
    const data = await res.json();
    dispatch(addReviews(data))
    // console.log(data)
    return data
}

export const createReview = (review) => async dispatch =>{
    const res = await fetch(`/api/reviews`, {
        method: 'POST',
        // body: JSON.stringify(review)
        headers: { 'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')},
        body: review
    });

    const data = await res.json();
    dispatch(addReview(data));
    console.log(data)
    return data
}


export const updateReview = (review) => async dispatch =>{
    const res = await fetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: { 'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')},
        body: review
    });
    const data = await res.json();
    dispatch(addReview(data));
    return data
}


export const deleteReview = (reviewId) => async dispatch =>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: 'DELETE'
    });
    if(res.ok){
        dispatch(removeReview(reviewId));
    }
}


function reviewsReducer(state = {}, action) {
    Object.freeze(state)
    const nextState = {...state}

    switch(action.type){
        case RECEIVE_BUSINESS:
            return {...nextState, ...action.payload.reviews}
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