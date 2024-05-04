import './EarlyAccess.css'
import ea from "../../../images/early_access.png"
function EarlyAccess() {
    return (
        <main className="earlyAccess">
            <h2><span>Your</span>Sportz</h2>
            <div className='bottom'>
                <h1>Excited for early access! Get a sneak peek before launch, explore features, and shape our platforms future.</h1>

                <div className='right'>
                    <img src={ea} />
                    <h2>Join the waitlist now to get the early access</h2>
                    <form>
                        <input type="tel" placeholder="Enter Your Phone Number" />
                        <button>Request Access</button>
                    </form>
                </div>
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