import './App.css';
import NavBar from './component/NavBar'
import Home from './component/Home'
import About from './component/About'
import Category from './component/Category';
import BestSelling from './component/BestSelling';
import Testimonials from './component/Testimonials';
import ContactForm from './component/ContactForm';
function App() {
  return (
   <>
  <NavBar/>
  <Home/>
  <About/>
  <Category/>
  <BestSelling/>
  <Testimonials/>
  <ContactForm/>
   </>
  );
}

export default App;
