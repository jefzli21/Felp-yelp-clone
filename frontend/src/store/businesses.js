import csrfFetch from "./csrf.js"


const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS'

// selector functions

export const selectBusiness = businessId => state =>{

    if(!state){
        return null;
    }else{
        return state.businesses[businessId]
    }
    
} 

// thunk action creators

const getBusiness = business => ({
    type: RECEIVE_BUSINESS,
    business
})


export const fetchBusiness = businessId => async dispatch =>{
    const res = await csrfFetch(`/api/businesses/${businessId}`);
    const data = await res.json();
    dispatch(getBusiness(data))
    return data
}

export const createBusiness = bizFormData => async dispatch =>{
    const res = await csrfFetch("/api/businesses", {
        method: "POST",
        body: JSON.stringify(bizFormData),
        headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await res.json();
    dispatch(getBusiness(data.business))
    return res
}


function businessReducer(state={},action) {
    Object.freeze(state);
    const nextState = {...state};
    // debugger
    switch(action.type){
        case RECEIVE_BUSINESS:
            nextState[action.business.id] = action.business
            return nextState;
        default:
            return state;
    }


}

export default businessReducer;