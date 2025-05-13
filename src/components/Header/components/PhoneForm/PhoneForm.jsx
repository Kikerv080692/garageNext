import { useState } from "react";
import emailjs from "emailjs-com"

export default function PhoneForm() {
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phone.replace(/\s/g, "").match(/^\+?[0-9]{9,15}$/)) {
            setStatus("Wrong number");
            return;
        }
        const templateParams = {
            phone_number: phone
        }
        emailjs.send('service_px91v0m', 'template_3j2nb0q', templateParams, '9aaKCdqlJ7dC3q4mx').then(() => {
            setStatus('телефонний номер відправлено')
            setPhone('')
        },
            (error) => {
                console.error(error);
                setStatus("failed")
            })
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="phone">Номер телефону:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+380XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit">Відправити</button>
            <span>{status}</span>
        </form>
    );
}
