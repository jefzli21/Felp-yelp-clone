import Navigation from "../Navigation";
import "./Home.css"
import {Link} from "react-router-dom"
import Footer from "../Footer";

function Home() {


    return (

        <div className="homepage">

        <div className="homenav">
        <Navigation />
        </div>

        <div className='categories'>
            <h1>Categories</h1>

            <div className="food-type">
            <Link  to={'search/American'} className="catotag" > <i className="fa-solid fa-hotdog"></i> American</Link>
            <Link  to={'search/Fast%20Food'} className="catotag" ><i className="fa-solid fa-burger"></i> Fast Food</Link>
            <Link  to={'search/Italian'} className="catotag" ><i className="fa-solid fa-pizza-slice"></i> Italian</Link>
            <Link  to={'search/Chinese'} className="catotag" > <i className="fa-solid fa-bowl-food"></i> Chinese</Link>
            <Link  to={'search/French'} className="catotag" > <i className="fa-solid fa-bread-slice"></i> French</Link>
            <Link  to={'search/English'} className="catotag" ><i className="fa-solid fa-fish"></i> English</Link>
            <Link  to={'search/German'} className="catotag" ><i className="fa-solid fa-plate-wheat"></i> German</Link>
            <Link  to={'search/Fried%20Chicken'} className="catotag" > <i className="fa-solid fa-drumstick-bite"></i> Fried Chicken</Link>

            </div>
            <div id="foot">

            {/* <Footer/> */}
            </div>
        </div>
        </div>
    )
}

export default Home;