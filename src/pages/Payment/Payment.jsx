import Layout from "../../components/Layout"
import "./Payment.css"
import payment from "../../images/payment.png"
export default function Payment() {
    return (
        <Layout>
            <main className="payment">
                <div className="left">
                    <h1>Let&apos;s Make Payment</h1>
                    <div className="msg">
                        <p>To start your subscription, input your card details to make payment.</p>
                        <p>You will be redirected to your banks authorization page.</p>
                    </div>
                    <form>
                        <div className="formEle">
                            <label htmlFor="cardhorder name">Cardholder&apos;s Name</label>
                            <input type="text"  name="cardhorder name" />
                        </div>
                        <div className="formEle">
                            <label htmlFor="Card Number">Card Number</label>
                            <input type="tel" maxLength={16} name="Card Number" />
                        </div>
                        <div className="formEle exp_cvc">
                            <div className="ele">
                                <label htmlFor="Expiry">Expiry</label>
                                <input type="text" name="Expiry" />
                            </div>
                            <div className="ele">
                                <label htmlFor="CVC">CVC</label>
                                <input type="text" name="CVC" />
                            </div>

                        </div>
                        <div className="formEle">
                            <label htmlFor="Discount Code">Discount Code</label>
                            <div className="discount">
                                <input type="text" name="Discount Code" />
                                <p>Apply</p>
                            </div>
                        </div>
                    </form>
                    <button>pay</button>
                </div>
                <img src={payment} alt="" />
                <div className="right">
                    <div className="top">
                        <div className="price">
                            <p>You’re paying,</p>
                            <h2><span className="symbol">&#8377;</span>25000</h2>
                        </div>
                        <div className="details">
                            <div className="left">
                                <h3>Per member, per Year </h3>
                                <p>Includes 30 Free Live Matches</p>
                            </div>
                            <h3><span className="symbol">&#8377;</span>25000</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="middle">
                        <h3>Discounts & Offers</h3>
                        <h3><span className="symbol">&#8377;</span>0.00</h3>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="tax">
                            <h3>Tax</h3>
                            <h3><span className="symbol">&#8377;</span>0.00</h3>

                        </div>
                        <div className="total">
                            <h3>Total</h3>
                            <h3 className="tp"><span className="symbol">&#8377;</span>25000</h3>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
