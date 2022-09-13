import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBusiness, fetchBusiness } from "../../store/businesses";
import { Link, useParams } from "react-router-dom";
import "./BusinessShowPage.css";
import { deleteReview, getBizReviews } from "../../store/reviews";
import StaticRating from "../StaticRating";


function BusinessShowPage() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const bizData = useSelector(selectBusiness(businessId));
  const reviewsData = useSelector(getBizReviews(businessId));
  const sessionUser = useSelector((state) => state.session.user);

  let totalRating = 0;
  
  reviewsData.map((review) => (
    totalRating += review.rating
    ))
    
    let averageRating = totalRating/reviewsData.length

    
  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [businessId]);

  if (!bizData) {
    return null;
  }

  // console.log(reviewsData);

  return (
    <>
      {/* place holder for 2nd Version NavBar */}
      <div className="biz-header">
        {/* biz-profile-pic */}
        <img src={bizData.photoUrl} alt="" width="1200vw" height="300vh" />
        <div className="headfunc">
          <div>
            <h1 id="biz-name">{bizData.bizName}</h1>
            {/* ratings */}
            <h1 id="biz-type">{bizData.bizType}</h1>
          </div>
          <div></div>
        </div>
      </div>
      {/* Buttons- write a review */}
      <div className="functional">
        <Link to={`/review/business/${businessId}`} id="write-review">
          <i className="fa-regular fa-star"></i>
          Write a review
        </Link>
      </div>

      {/* location and hours */}
            <StaticRating rating={averageRating} />
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

      <ul>
        {reviewsData.map((review) => (
          
          <li key={review.authorId}>
            <h2>{review.author}</h2>
            <div className="stars-date">
            <p>{review.createdAt}</p>
            <StaticRating rating={review.rating}/>

            </div>
            <p>{review.body}</p>
            {(sessionUser ? sessionUser.id : null) === review.authorId ? <button onClick={() => dispatch(deleteReview(review.id))}>Delete Post</button> : <p></p>}
          </li>
        ))}
      </ul>
    </>
  );


}

export default BusinessShowPage;
