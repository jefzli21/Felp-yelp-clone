import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { selectBusiness, selectBusinesses,fetchBusiness } from "../../store/businesses";
import {Link, useParams} from 'react-router-dom'

function BusinessShowPage(){
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const bizData = useSelector(selectBusiness(businessId))
    console.log(businessId)

    useEffect(()=>{
        dispatch(fetchBusiness(businessId))
    } ,[businessId])

    if(!bizData){
        return null;
    }
    
    return (

        <>
        {/* place holder for 2nd Version NavBar */}
        <div className="biz-pics-background">
         {/* biz-profile-pic */}
         <img src={bizData.photoUrl} alt='' width='300vw' height='300vh' />
        <h1>{bizData.bizName}</h1>
        {/* ratings */}
        <h1>{bizData.bizType}</h1>
        </div>
        {/* Buttons- write a review */}

        {/* location and hours */}
        <h1>{bizData.address}</h1>
        <h1>{bizData.long}</h1>
        <h1>{bizData.lat}</h1>
        <h1>{bizData.hours}</h1>

        <h1>{bizData.feature}</h1>

        <h1>About the Business</h1>
        <h1>{bizData.about}</h1>

        <div className="side-info">
        <h1>{bizData.phone}</h1>
        <h1>{bizData.address}</h1>
        <h1>{bizData.website}</h1>
        </div>

        {/* <h1>{bizData.ownerId}</h1> */}

        <h1>Reviews</h1>
   
     
        </>
        
        
    )
    
}

export default BusinessShowPage;