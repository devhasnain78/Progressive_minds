import React from 'react'
import '../css/Category.css'
function Category() {
  return (
    <>
    <section id="categories">
    <div class="cat-container container">
        <h1 class="heading">Categories</h1>
        <div class="cat-images">
            <img src={require('../img/child_book2.png')} alt=""/>
            <img src={require('../img/girls-4.jpg')} alt=''/>
            <img src={require('../img/book-3.jpg')} alt=""/>
        </div>
        <div class="img-age">
            <h2><a href="/">Children (5-12)</a> </h2>
            <h2> <a href="/"> Teenagers (13-19) </a></h2>
            <h2> <a href="/"> Adults (20-25+) </a></h2>
        </div>
    </div>
</section>
    </>
  )
}

export default Category