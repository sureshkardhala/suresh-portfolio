import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from './components/Experience'
import Contact from "./components/Contact";
import { useDispatch} from "react-redux";
import { useEffect} from "react";
import { fetchData } from "./store/portfolio-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
   
    dispatch(fetchData());
  }, [dispatch]);

  return (
   <>
   <NavBar />
   <Home />
   <SocialLinks />
   <About/>
   <Portfolio />
   <Experience />
   <Contact />
   </>
  );
}
export default App;