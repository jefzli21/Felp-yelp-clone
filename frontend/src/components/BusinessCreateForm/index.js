import React from "react";
import './BusinessCreateForm.css';

function BusinessCreateForm(){


    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("biz[bizName]", rating);
        formData.append("biz[bizType]", body);
        formData.append("review[bizId]", businessId);
        formData.append("review[authorId]", sessionUser.id);
        for (let i = 0; i < photos.length; i++) {
          formData.append("review[photos][]", photos[i]);
        }

    }


    return(
        <>
        <h1>Create Your Own Business!</h1>
        
        <form onSubmit={handleSubmit}>
            <label>
            Business Name:
            <input type="text" />
            </label>

            <label>
            Business Type:
            <input type="text" />
            </label>

            <label>
            Address:
            <input type="text" />
            </label>

            <label>
            Hours:
            <input type="text" />
            </label>

            <label>
            About:
            <input type="text" />
            </label>

            <label>
            Features:
            <input type="text" />
            </label>

            <label>
            phone:
            <input type="text" />
            </label>

            <label>
            Location Longitude:
            <input type="text" />
            </label>

            <label>
            Location Latitude:
            <input type="text" />
            </label>
        </form>
        
        
        </>
    )

}


export default BusinessCreateForm;