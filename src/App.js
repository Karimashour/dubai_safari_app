import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import SingleTour from "./pages/tour/SingleTour";
import About from "./pages/about/About";
import LogIn from "./pages/forms/LogIn";
import Register from "./pages/forms/Register";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tour/:id" element={<SingleTour/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
