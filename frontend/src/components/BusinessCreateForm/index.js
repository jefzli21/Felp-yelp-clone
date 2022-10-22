import React from "react";
import './BusinessCreateForm.css';

function BusinessCreateForm(){



    return(
        <>
        <h1>Create Your Own Business!</h1>
        
        <form>
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