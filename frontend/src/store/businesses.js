import csrfFetch from "./csrf.js"


export const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS'
export const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES'

// selector functions

export const selectBusiness = businessId => state =>{

    if(!state){
        return null;
    }else{
        return state.businesses[businessId]
    }
    
} 

export const selectBusinesses = state =>{
    if(!state.businesses){
        return []
    }else{
        return Object.values(state.businesses)
    }
}


// thunk action creators

export const addBusiness = payload => ({
    type: RECEIVE_BUSINESS,
    payload
})

export const addBusinesses = businesses => ({
    type: RECEIVE_BUSINESSES,
    businesses
})

export const fetchQueryBusinesses = (query) => async dispatch => {
    const res = await csrfFetch(`/api/search/${query}`)
    if(res.ok){
        const data = await res.json();
        console.log(data)
        dispatch(addBusinesses(data))
    }else{
        throw res
    }
}



export const fetchBusiness = businessId => async dispatch =>{
    const res = await csrfFetch(`/api/businesses/${businessId}`);
    const data = await res.json();
    dispatch(addBusiness(data))
    return data
}

export const createBusiness = bizFormData => async dispatch =>{
    const res = await csrfFetch("/api/businesses", {
        method: "POST",
        body: JSON.stringify(bizFormData),
    })
    const data = await res.json();
    dispatch(addBusiness(data.business))
    return data
}


function businessReducer(state={},action) {
    Object.freeze(state);
    const nextState = {...state};
    // debugger
    switch(action.type){
        case RECEIVE_BUSINESS:
            nextState[action.payload.business.id] = action.payload.business
            return nextState;
        case RECEIVE_BUSINESSES:
            return {...action.businesses}
        default:
            return state;
    }


}

export default businessReducer;