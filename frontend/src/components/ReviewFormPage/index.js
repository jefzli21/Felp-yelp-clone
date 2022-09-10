import React from 'react';
import { useSelector } from 'react-redux';



function ReviewForm({business}){
    const sessionUser = useSelector(state => state.session.user);
    const handleSubmit = (e) =>{
        e.preventDefault();

    }

    console.log(business)


    return (

        <>
         <h1>{business}</h1>
        <form onSubmit={handleSubmit} className='reviewform'>
            <textarea></textarea>
        </form>
        
        
        
        </>
        
        
    )
    
    
}

export default ReviewForm;