import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
const Home = () => {
  return (
    <>
    <div className="navbar">
      <h1>NOVAVI</h1>
      <div className="right">
          
          <div className="button1">
              <Link to={"/adde"}><button>Add employee</button></Link>
          </div>
      </div>
    </div>
    <div className="contentss" >
        <div className="contentt">
            <Link to={'/profile'}>
                <div className="imgg">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="detailss">
                    <h2>Name</h2>
                    <h3>designation</h3>
                </div>
            </Link>
        </div>
        <div className="contentt">
            <Link to={'/profile'}>
                <div className="imgg">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="detailss">
                    <h2>Name</h2>
                    <h3>designation</h3>
                </div>
            </Link>
        </div>
        <div className="contentt">
            <Link to={'/profile'}>
                <div className="imgg">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="detailss">
                    <h2>Name</h2>
                    <h3>designation</h3>
                </div>
            </Link>
        </div>
        <div className="contentt">
            <Link to={'/profile'}>
                <div className="imgg">
                    {/* <img src="${employ.profile}" alt="${employ.name}"/> */}
                </div>
                <div className="detailss">
                    <h2>Name</h2>
                    <h3>designation</h3>
                </div>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Home
