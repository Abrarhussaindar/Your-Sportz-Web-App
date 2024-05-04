// import React from 'react'
import img from "../../../images/andPhone.png"
import './EarlyAccess.css'
function EarlyAccess() {
    return (


        <main className="earlyAccess">
            <h2><span>Your</span>Sportz</h2>

            <div className='bottom'>

                <div className='left'>
                    <h1>Excited for early access! Get a sneak peek before launch, explore features, and shape our platforms future.</h1>

                    <form>
                        <input type="email" placeholder="Enter Your Email" />
                        <button>Request Access</button>
                    </form>
                </div>
                <img src={img} />
            </div>
        </main>

    )
}

export default EarlyAccess


{/* <div className="main">

                <div className="topText">
                    <p>YourSportz</p>
                </div>
                <div className="box1">
                    <div className="para">
                        <p>Excited for early access! Get a sneak peek before launch, explore features, and shape our platforms future.</p>

                    </div>


                    <div className="form">
                        <input type="email" placeholder="Enter email" />
                        <button className="btn">Request Access</button>
                    </div>
                </div>

                <div className="box2">
                    <img src={features} alt="" />
                </div>
            </div> */}