import { useSelector } from "react-redux";
import "./BusinessIndexPage.css"
import {selectBusinesses} from "../../store/businesses"


function BusinessIndexPage () {
    const bizData = useSelector((state)=> selectBusinesses(state))


    if(!bizData){return null}
    console.log(bizData)




    return (
        <>
        <h1>Search Results</h1>

        {bizData.map((business) => (
            <div className="singlebiz">
                <div className="bizhead">
                <img src={business.photoUrl} alt="" width="250vw" height='250vh' />
                <h1>{business.bizName}</h1>
                </div>

            </div>
        ))}

        
        </>
    )
}

export default BusinessIndexPage;