import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { selectBusiness, fetchBusiness, createBusiness } from "../../store/businesses";
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
        <h1>{bizData.bizName}</h1>
        hello
        </>
        
        
    )
    
}

export default BusinessShowPage;