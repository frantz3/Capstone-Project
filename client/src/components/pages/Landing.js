import {Link} from "react-router-dom"

function LandingPageButton() {
    return <Link to="/login" class="nav-link">
        <button class="btn btn-primary"  style={{backgroundColor: "#EDB518", border: "none"}}> 
            <span style={{"font-size": "24px", color: "#79031D"}}>
                Get Started
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px", color: "#EDB518"}}>
            Workout Tracker
        </div>
        
        <div style={{"font-size": "36px", color: "#EDB518"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. 
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACUCAMAAAD70yGHAAAAA1BMVEV5Ax20cVEfAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBnA8UkAAEmGMCJAAAAAElFTkSuQmCC")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function Landing() {
    return <div>
        <LandingFrame />
    </div>
}
export default Landing