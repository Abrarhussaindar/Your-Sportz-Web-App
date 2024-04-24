import { useState } from "react";
import Layout from "../../components/Layout";
import "./ContactUs.css"
import contactImg from "../../images/contact.jpg"
export default function ContatctUs() {
    // const [name, setName] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSub] = useState("")
    const [msg, setMsg] = useState("")
    console.log("name; ", name)
    const handlesubmit = (e) => {
        console.log(e.target.value);
    }

    return (
        <Layout>
            <main className="contact">
                <div className="left">
                    <h3>### We&apos;re Here to Help!</h3>
                    <img src={contactImg} alt="" />
                    <p>**Got a question?** We love hearing from you! Whether you have a query about our services, need assistance, or you&apos;re crafting the next big idea and need some advice, our team is all ears.</p>
                    
                </div>
                <div className="right">
                    <p>Just fill out the form below, and we&apos;ll get back to you with lightning speed.</p>
                    <form>
                        <label htmlFor=" ">Full name </label>
                        <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor=" ">Phone Number</label>
                        <input type="tel" maxLength={10} placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor=" ">Email ID </label>
                        <input type="text" placeholder="Email ID " value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor=" ">Subject </label>
                        <input type="text" value={subject} onChange={(e) => setSub(e.target.value)} />
                        <label htmlFor=" ">Messege </label>
                        <textarea rows={4} type="text" placeholder="Type Your messege" className="Messege" value={msg} onChange={(e) => setMsg(e.target.value)} />
                        <button onClick={handlesubmit}>Submit</button>
                    </form>
                </div>

            </main >

        </Layout >
    )
}
