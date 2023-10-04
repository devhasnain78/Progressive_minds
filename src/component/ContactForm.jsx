import React from 'react'
import '../css/ContactForm.css'
import book_1 from '../img/book_1.jpg'
function ContactForm() {
  return (
    <>
    <section id="contactform">
    <div class="contact-heading container">
        <h2>Want more deatils? - Contact Us</h2>
    </div>
    <div class="contact-para container">
        <p>Contact us to explore the world of books, share your thoughts, or get recommendations from our knowledgeable team. We're passionate about books and dedicated to providing exceptional customer service.</p>
    </div>
    <div class="contact-container container">
        <div class="joinus">
          <div class="contact-img">
            <img src={book_1} alt=""/>

          </div>  
        <form action="">
            <input type="text" name="" id="" placeholder="Full Name"/>
            <input type="email" name="" id="" placeholder="Email"/>

    </form>
    <textarea name="" id="" cols="40" rows="4" placeholder="Your Message"></textarea>
    <a href="/" class="btn-form">Submit</a>
    
    
</div>
<div class="other-details">
    <h2 class="ci">Contact Information:</h2>
    <h3 class="phone">Phone: [+93123456789]</h3>
    <h3 class="emails">Email: [abc@gmail.com]</h3>
    <p class="data">We value your feedback and aim to respond promptly.</p>
        <p>Your satisfaction is our priority, and we're committed to making your book-buying experience memorable.</p>
</div>
</div>

</section>
    </>
  )
}

export default ContactForm