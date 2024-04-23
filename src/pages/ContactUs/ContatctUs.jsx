import { useState } from "react";
import Layout from "../../components/Layout";
import "./ContactUs.css"
export default function ContatctUs() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSub] = useState("")
    const [msg, setMsg] = useState("")
    const handlesubmit = (e) => {
        console.log(e.target.value);
    }

    return (
        <Layout>
            <main>
                <h2>Get in Touch!</h2>
                <form>
                    <label htmlFor=" ">Full name </label>
                    <input type="text" placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <label htmlFor=" ">Phone Number</label>
                    <input type="tel" maxLength={10} placeholder="Phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <label htmlFor=" ">Email ID </label>
                    <input type="text" placeholder="Email ID " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor=" ">Subject </label>
                    <input type="text" value={subject} onChange={(e)=>setSub(e.target.value)}/>
                    <label htmlFor=" ">Messege </label>
                    <textarea rows={4} type="text" placeholder="Type Your messege" className="Messege" value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                    <button onClick={handlesubmit}>Submit</button>
                </form>
            </main >

        </Layout >
    )
}
