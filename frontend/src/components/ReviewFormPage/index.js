import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { selectBusiness, fetchBusiness } from "../../store/businesses";
import {
  createReview,
  fetchReview,
  getReview,
  updateReview,
} from "../../store/reviews";
import LoginFormModal from "../LoginFormModal";
import "./ReviewFormPage.css";
import StarRating from "../Rating";

// {business}
function ReviewForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const bizData = useSelector(selectBusiness(businessId));
  const sessionUser = useSelector((state) => state.session.user);
  const [showLoginModal, setLoginModal] = useState(false);
  const reviewData = useSelector(
    sessionUser ? getReview(sessionUser.id, +businessId) : getReview(null)
  );

  const [rating, setRating] = useState(1);
  const [body, setBody] = useState("");

  const type = reviewData ? "update" : "create";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionUser) {
      return setLoginModal(true);
    }else{
      if (type === "create") {
        dispatch(
          createReview({
            rating,
            body,
            biz_id: businessId,
            author_id: sessionUser.id
          })
          );
        } else {
          dispatch(updateReview({ ...reviewData, rating, body }));
        }
       history.push(`/business/${businessId}`)
      }
  };

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [businessId]);

  useEffect(() => {
    if(sessionUser){
      dispatch(fetchReview(businessId, sessionUser.id));
    }
  }, [sessionUser]);

  useEffect(() => {
    if (reviewData) {
      setRating(reviewData.rating);
      setBody(reviewData.body);
    }
  }, [reviewData]);

  if (!bizData) {
    return null;
  }


  return (
    <>
      <div className="review-page">
        <form onSubmit={handleSubmit} className="reviewform">
          <h1 id="busname">{bizData.bizName}</h1>
          <div className="rating">
            <StarRating
              className="rating"
              rating={rating}
              setRating={setRating}
            />
          </div>

          <div className="review-body">
            <textarea
              id="review-text"
              value={body}
              placeholder="This is the best mcdonald's i have ever been to. Their Big MAC is crazzzzy good, not to mention the filet-O-fish. Its all just mind bloawing"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <div id="upload">
            <h1>Attach Photos</h1>
            <textarea></textarea>
          </div>

          <button type="submit" id="post-review">
            Post Review
          </button>
          <LoginFormModal
            showLoginModal={showLoginModal}
            setLoginModal={setLoginModal}
          />
        </form>
      </div>
    </>
  );
}

export default ReviewForm;
