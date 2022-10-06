import git from "./git.png"
import link from "./link.png"
import "./Footer.css"

function Footer () {


    return(
        <div className="all-foot">
        
        <div className="contact-info">
            
            <h2>Inspired by Yelp, Designated to Food</h2>
            <div>
            <a href="https://github.com/jefzli21" target="_blank" rel="noopener noreferrer" id="iconpic"><img src={git} width="100vw" height="100vh"></img></a>
            <a href="https://www.linkedin.com/in/jefzli21/" target="_blank" rel="noopener noreferrer" id="iconpic"><img src={link} width="100vw" height="100vh"></img></a>
            </div>
            
        </div>
        
        </div>
    )
    
    
}

export default Footer