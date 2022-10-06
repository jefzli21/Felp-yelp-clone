import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBusiness, fetchBusiness } from "../../store/businesses";
import { Link, useParams } from "react-router-dom";
import "./BusinessShowPage.css";
import { deleteReview, getBizReviews } from "../../store/reviews";
import StaticRating from "../StaticRating";
import imgdefault from '../UserShowPage/default.png'
import GMap from "../GMap";


function BusinessShowPage() {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const bizData = useSelector(selectBusiness(businessId));
  const reviewsData = useSelector(getBizReviews(businessId));
  const sessionUser = useSelector((state) => state.session.user);


  
  // average rating
  let totalRating = 0;
  reviewsData.map((review) => (totalRating += review.rating));
  let averageRating = totalRating / reviewsData.length;

  // extracting all photos
  let allpics = [];
  reviewsData.map((review) => (allpics = allpics.concat(review.photoUrls)));

  //button
  let button = "Write a Review";
  reviewsData.map((review) => {
    if(sessionUser && review.authorId === sessionUser.id){
      button = "Edit Review"
    }
 });


  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [businessId]);

  if (!bizData) {
    return null;
  }

  let features = bizData.feature
  const allFeatures = features.split(",")

  // console.log(allFeatures)

  const location = {
    address: bizData.address,
    lat: bizData.lat,
    lng: bizData.long
  }
  
  
  return (
    <>
          <div className="top-background">
            {allpics.map((pic, i) => (
              <img
                key={i}
                id="topback"
                src={pic}
                alt=""
                width="330vw"
                height="400vh"
              />
            ))}
          </div>

      <div className="entire-biz-page">
        {/* place holder for 2nd Version NavBar */}
        <div className="biz-header">
          {/* biz-profile-pic */}
          <div className="headfunc">
            <div>
              <h1 id="biz-name">{bizData.bizName}</h1>
              {/* ratings */}
              <h1 id="biz-type">{bizData.bizType}</h1>
              <StaticRating rating={averageRating} />
            </div>
          </div>
        </div>

        {/* Buttons- write a review */}
        <div className="core-info">
          <div className="left">
        <div className="functional">
          <Link to={`/review/business/${businessId}`} id="write-review">
            <i className="fa-regular fa-star"></i> {button}
          </Link>
        </div>

        <div className="location-and-hours">

        </div>
        {/* location and hours */}
        <h1>Location and Hours</h1>
        <div className="location-hours">
        <div className="map">
        <GMap location={location}/>
        <p>{bizData.address}</p>
        </div>
        <p id="hours">{bizData.hours}</p>
        </div>
        {/* features section */}
        <h1>Features</h1>
        <div className="features">
        {allFeatures.map((feature,i)=>(
        <div key={i+100}>
          <h2><i id="check" className="fa-regular fa-circle-check"></i> {feature}</h2>
        </div>
        ))}
        </div>

        {/* business about */}
        <div className="biz-about">
        <h1>About the Business</h1>
        <p>{bizData.about}</p>
        </div>

    

        {/* <h1>{bizData.ownerId}</h1> */}

        <h1 id="review-section">Reviews</h1>

        <ul className="biz-reviews">
          {reviewsData.map((review) => (
            <div className="singlereview" key={review.authorId}>
              <div id="name-pic">
              <img src={review.pic ? review.pic: imgdefault} width="40vw" height="40vh" id="profpic"></img>
              <h2>{review.author}</h2>
              {(sessionUser ? sessionUser.id : null) === review.authorId ? (
                <button id="delete-review" onClick={() => dispatch(deleteReview(review.id))}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              ) : (
                <p></p>
              )}
              </div>
              <div className="stars-date">
                <p id="create-date">Commented on {new Intl.DateTimeFormat('en-GB', { 
              month: 'long', 
              day: '2-digit',
              year: 'numeric', 
            }).format(new Date(review.createdAt))}</p>
                <StaticRating rating={review.rating} />
              </div>
              <p id="biz-body">{review.body}</p>
              <li>
                  {review.photoUrls.map((pic,i)=>(
                    <img
                    key={i}
                    id="review-pics"
                    src={pic}
                    alt=""
                    width="150vw"
                    height="150vh"
                  />
                  ))}
              </li>
             
            </div>
          ))}
        </ul>
        </div>
        <div className="right">
          <a className="side-item" id="web" href={bizData.website} target="_blank" rel="noopener noreferrer">{bizData.website} <i className="fa-solid fa-arrow-right-from-bracket"></i> </a>
          <a className="side-item" id="ph">{bizData.phone} <i className="fa-solid fa-phone"></i></a>
          <a className="dir">
          {/* <h3>Get Direction</h3> */}
          <p className="side-item" id="bizaddress">{bizData.address} <i className="fa-solid fa-diamond-turn-right"></i></p>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default BusinessShowPage;
