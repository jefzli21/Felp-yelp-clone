import { useDispatch, useSelector } from "react-redux";
import "./BusinessIndexPage.css"
import {fetchQueryBusinesses, selectBusinesses} from "../../store/businesses"
import StaticRating from "../StaticRating";
import { useHistory, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import GMap from "../GMap";


function BusinessIndexPage () {
    const { query } = useParams();
    const dispatch = useDispatch();
    const bizData = useSelector((state)=> selectBusinesses(state))
    const history = useHistory();
    
    useEffect(()=>{
        dispatch(fetchQueryBusinesses(query))
    },[query])

    // get all lat and lng
    
    if(!bizData){return null}

    const handleClick = (e) => {
        history.push(`/search/${query}`)

    }



    return (
        <>
        
        <div className="allindex">

        <div className="leftindex">
        <h1>Search Results:</h1>
        { bizData.length > 0 ? bizData.map((business,i) => (
            <Link to={`/business/${business.id}`}className="singlebiz" key={i} >
                <img src={business.photoUrl} alt="" width="250vw" height='250vh' />
                <div className="bizhead">
                <h1>{i+1}.{business.bizName}</h1>
                <StaticRating rating={business.averageRating} />
                <p>{business.bizType}</p>
                
                </div>

            </Link>
        )): <h1>Sorry, no results found</h1>}
        </div>
            <div></div>

        </div>
        
        </>
    )
}

export default BusinessIndexPage;