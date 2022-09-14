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
    // console.log(reviewsData)

    useEffect(()=>{
      
            dispatch(fetchReviews())
    },[authorId])
    
    if(!reviewsData)return null;
    
    if(!sessionUser){
        history.push(`/`)
    }else{
    return(
    <>
    <div className="everything" >

        <div className="user-title" >
            <div className="profilehead">
                <div className="addpic">
        {/* <button id="adp"><i className="fa-solid fa-camera"></i>Add a photo</button> */}
        <img src={imgdefault} id="profilepic" width="200vw" height="200vh" />
                </div>
                <div>
        <h1 id="usernam">{sessionUser.username}</h1>
        <h1>So far you have reviewed: </h1>
                </div>
            </div>
        <p></p>
        </div>
    
      <div id="bot-back">

        <ul className="all-reviews" >
        {reviewsData.map((review) => (
          <div className="user-review" key={review.bizId}>
            <h2><Link to={`/business/${review.bizId}`}>{review.business}</Link></h2>

            <div className="stars-date">
            <p id="create-date">
            Commented On {new Intl.DateTimeFormat('en-GB', { 
              month: 'long', 
              day: '2-digit',
              year: 'numeric', 
            }).format(new Date(review.createdAt))}
            </p>
            <StaticRating  rating={review.rating}/>
            </div>
            <p id="review-body">{review.body}</p>
            <ul className="review-pics">
                {review.photoUrls.map((pic,i)=>(
                  <li key={i+1000}>
                    <img className="review-pic" src={`${pic}`} alt='' width="180vw" height="180vh"></img>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
    </div>
    </>
    )
}

    
    
    
    
}

export default UserShowPage;