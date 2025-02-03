import profile from "../imgs/PortfolioImage.jpg"
function Home() {
    return (
        <div className="home">
            <div className="daniel-details">
                <p className='sub-name'><span>Hi Friends,</span></p>
                <p className='name'>I'm Daniel Androse</p>
                <p className='sub-name'><span>A Web Developer</span></p>
                <div className="details-buttons">
                    <button>Contact Me</button>
                    <button>View Resume</button>
                </div>
            </div>
            <div className="profile-photo">
                <img className="profile-img" src={profile} alt="Profile" />
            </div>
        </div>
    )
}

export default Home