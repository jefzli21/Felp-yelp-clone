import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBusiness, fetchBusiness } from "../../store/businesses";
import { Link, useParams } from "react-router-dom";
import "./BusinessShowPage.css";
import { fetchReviews, getBizReviews } from "../../store/reviews";

function BusinessShowPage() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const bizData = useSelector(selectBusiness(businessId));
  const reviewsData = useSelector(getBizReviews(businessId))
  
  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [businessId]);
  
  
  if (!bizData) {
    return null;
  }

  console.log(reviewsData)

  
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
      {reviewsData.map((review)=>(
        <>
        <h2 key={review.id}>{review.author}</h2>
        <h2 key={review.id}>{review.rating}</h2>
        <p key={review.id}>{review.body}</p>

        </>
      ))}
      
    </>
  );
}

export default BusinessShowPage;
