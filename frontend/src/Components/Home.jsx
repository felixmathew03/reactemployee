import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const Home = () => {
  return (
    <div className="contents" id="contents">
        <div className="content">
            <Link to={'/profile'}>
                <div className="img">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="details">
                    <div className="details">
                        <h2>Name</h2>
                        <h3>designation</h3>
                    </div>
                </div>
            </Link>
        </div>
        <div className="content">
            <Link to={'/profile'}>
                <div className="img">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="details">
                    <div className="details">
                        <h2>Name</h2>
                        <h3>designation</h3>
                    </div>
                </div>
            </Link>
        </div>
        <div className="content">
            <Link to={'/profile'}>
                <div className="img">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="details">
                    <div className="details">
                        <h2>Name</h2>
                        <h3>designation</h3>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Home
