import React, { useState } from "react";
import { useDispatch } from "react-redux";
import './BusinessCreateForm.css';

function BusinessCreateForm(){
    const dispatch = useDispatch();
    const [bizName, setBizName] = useState("");
    const [bizType, setBizType] = useState("");
    const [address, setAddress] = useState("");
    const [hours, setHours] = useState("");
    const [about, setAbout] = useState("");
    const [feature, setFeature] = useState("");
    const [phone, setPhone] = useState("");
    const [longitutude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [website, setWebsite] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("biz[bizName]", bizName);
        formData.append("biz[bizType]", bizType);
        formData.append("biz[bizId]", businessId);
        formData.append("biz[ownerId]", sessionUser.id); 
        formData.append("biz[photo]", photo);
        

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