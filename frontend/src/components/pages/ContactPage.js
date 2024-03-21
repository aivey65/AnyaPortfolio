import React from "react"

export default function ContactPage() {
    return <div>
        <h1>Contact</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="5c5de659-ad1d-4cde-802b-b4372560e55b" />
            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
        
            <div id="name-div">
                <label className="required-input" htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required />
            </div>

            <div id="email-div">
                <label className="required-input" htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
            </div>

            <div id="message-div">
                <label className="required-input" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" cols="50" required></textarea>
            </div>
            
            <button className="cta-button" type="submit">Submit</button>
        </form>
        <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
}