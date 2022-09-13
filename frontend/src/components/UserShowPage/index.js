import { useDispatch, useSelector } from "react-redux";
import './UserShowPage.css'
import imgdefault from './default.png'
import { useHistory, useParams, Link } from "react-router-dom";
import { fetchReviews, getAuthorReviews } from "../../store/reviews";
import { useEffect } from "react";
import StaticRating from "../StaticRating";



function UserShowPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const {authorId} = useParams();
    const reviewsData = useSelector(getAuthorReviews(authorId));
    const sessionUser = useSelector(state => state.session.user)
    console.log(authorId)

    useEffect(()=>{
      
            dispatch(fetchReviews())
    },[authorId])
    
    if(!reviewsData)return null;
    // console.log(reviewsData)
    
    if(!sessionUser){
        history.push(`/`)
    }else{
    return(
    <>
        <div className="user-title">
            <div className="profilehead">
                <div className="addpic">
        <button id="adp"><i className="fa-solid fa-camera"></i>Add a photo</button>
        <img src={imgdefault} id="profilepic" width="200vw" height="200vh" />
                </div>
                <div>
        <h1 id="usernam">{sessionUser.username}</h1>
        <h1>So far you have reviewed: </h1>
                </div>
            </div>
        <p></p>
        </div>

        <ul>
        {reviewsData.map((review) => (
          <li key={review.authorId}>
            <h2><Link to={`/business/${review.bizId}`}>{review.business}</Link></h2>
            <div className="stars-date">
            <p>Commented On {review.createdAt}</p>
            <StaticRating rating={review.rating}/>
            </div>
            <p>{review.body}</p>
            <div>
                pics
            </div>
          </li>
        ))}
      </ul>

    </>
    )
}

    
    
    
    
}

export default UserShowPage;