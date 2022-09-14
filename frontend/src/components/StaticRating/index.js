import React from "react";
import { FaStar } from 'react-icons/fa'



const StaticRating = ({rating}) =>{
    // const [rating,setRating] = useState(null)

    return (

        <div>
    {[...Array(5)].map((star, i) => {
        const ratingValue = i 
       return (
        <FaStar 
        className="star"
        key={ratingValue}
        values={ratingValue}
        color={(ratingValue >= rating) ? "#e4e5e9" :"#ffc107"} 
        size={30}
        />
        
       )

    })}
    </div>
        )
}


export default StaticRating;