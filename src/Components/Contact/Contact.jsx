// b47fe485-e14a-4b1b-9945-437298f2a8d4
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b47fe485-e14a-4b1b-9945-437298f2a8d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p> Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> ContactEduRay@.com</li>
                <li> <img src={phone_icon} alt="" /> +91 912-345-6789</li>
                <li> <img src={location_icon} alt="" /> Edu-Ray College
                    45 Academic Street,
                    Downtown Education District,
                    London, UK - EC1A 1BB</li>
            </ul>
      </div>
      <div className="contact-col">
        <form  onSubmit={onSubmit}>
            <lebel>Your Name</lebel>
            <input type="text" name="name" placeholder='Enter your name' required />
            <lebel>Your Phone Number</lebel>
            <input type="tell" name="phone" placeholder='Enter your Phone Number' required />
            <lebel>Message </lebel>
            <textarea name ="message"  rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Send Message <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
