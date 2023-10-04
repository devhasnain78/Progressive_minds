import React from 'react'
import '../css/Testimonials.css'
import feedback1 from '../img/feedback1.png'
import feedback2 from '../img/feedback2.jpg'
import feedback3 from '../img/feedback3.jpg'
function Testimonials() {
  return (
    <>
    <section id="testimonials">
    <div class="test-heading container">
        <h2>What book readers say about &#34;Progressive Minds&#34;</h2>
    </div>
    <div class="testi-container container">
        <div class="testimonial-box">
        <div class="rating-stars">
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>

        </div>
        <div class="rating-text">
            <p>I appreciate their commitment to promoting progressive ideas and challenging conventional thinking. It's my go-to destination for finding books that inspire and expand my horizons.</p>
        </div>
        <div class="customer-img">
            <img src={feedback1} alt=""/>
            <p class="customer-name">-Sarah</p>

        </div>
    </div><div class="testimonial-box">
        <div class="rating-stars">
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>

        </div>
        <div class="rating-text">
            <p>Their collection of progressive books is unparalleled, and their website is user-friendly. I always find compelling reads that challenge my perspectives and ignite meaningful conversations.</p>
        </div>
        <div class="customer-img">
            <img src={feedback2} alt=""/>
            <p class="customer-name">-Camilae</p>

        </div>
    </div>
    <div class="testimonial-box">
        <div class="rating-stars">
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>
            <span class="fa fa-star checked" aria-hidden="true"></span>

        </div>
        <div class="rating-text">
            <p>Their selection of progressive books has broadened my understanding of important issues and empowered me to be an agent of positive transformation. I'm grateful to have found a platform that aligns with my values.</p>
        </div>
        <div class="customer-img">
            <img src={feedback3} alt=""/>
            <p class="customer-name">-Jennifer</p>

        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Testimonials