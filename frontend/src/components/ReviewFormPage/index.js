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
  console.log(reviewData);

  const [errors, setErrors] = useState([]);
  const [rating, setRating] = useState(1);
  const [body, setBody] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState("");

  const type = reviewData ? "update" : "create";

  // AWS

  const reader = new FileReader();
  // const file = e.currentTarget.files[0]
  // reader.onloadend = () =>

  //

  const handleSubmit = (e) => {
    e.preventDefault();

   

    if (!sessionUser) {
      return setLoginModal(true);
    } else {

       // AWS
    const formData = new FormData();
    formData.append("review[rating]", rating);
    formData.append("review[body]", body);
    formData.append("review[bizId]", businessId);
    formData.append("review[authorId]", sessionUser.id);
    for (let i = 0; i < photos.length; i++) {
      formData.append("review[photos][]", photos[i]);
    }
      
      
      if (type === "create") {
        dispatch(createReview(formData)).catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if, e.g., server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data.message]);
          else setErrors([res.statusText]);
        });
      } else {
        dispatch(updateReview(formData, reviewData.id)).catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if, e.g., server is down
          }
          console.log(data);
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data.message]);
          else setErrors([res.statusText]);
        });
      }

      if (body) {
        history.push(`/business/${businessId}`);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchBusiness(businessId));
  }, [businessId]);

  useEffect(() => {
    if (sessionUser) {
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
        <ul>
          {errors.map((error) => (
            <li key={error} className="error">
              {error}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="reviewform">
          <h1 id="busname">{bizData.bizName}</h1>

          <div className="rate">
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
              required
            />
          </div>

          <div id="upload">
            <h1>Attach Photos</h1>
            <input
              type="file"
              onChange={(e) => setPhotos(e.target.files)}
              multiple
            />
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
