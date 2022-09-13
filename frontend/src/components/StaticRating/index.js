import React,{useState} from "react";
import { FaStar } from 'react-icons/fa'



const StaticRating = ({rating}) =>{
    // const [rating,setRating] = useState(null)

    return (

        <div>
    {[...Array(5)].map((star, i) => {
        const ratingValue = i 
       return (
        <FaStar 
        values={ratingValue}
        color={(ratingValue >= rating) ? "#e4e5e9" :"#ffc107"} 
        size={50}
        />
        
       )

    })}
    </div>
        )
}


export default StaticRating;