import Home from "./components/Home";
import Book from "./components/Book";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Confirmation from "./components/Confirmation";
import {useState} from 'react'

function App() {

  const [showComponent, setShowComponent] = useState('home');
  let component = <Home setShowComponent={setShowComponent}/>;
  let home = true;
  let color = 'white';

   if(showComponent){
    if (showComponent.toLowerCase() === 'home'){
      component = <Home setShowComponent={setShowComponent}/>;
      home = true;
      color = 'white';
    } else if (showComponent.toLowerCase() === 'service') {
      component = <Service setShowComponent={setShowComponent}/>;
      home = false;
      color = 'black';
    } else if (showComponent.toLowerCase() === 'contact') {
      component = <Contact />;
      home = false;
      color = 'black';
    } else if (showComponent.toLowerCase() === 'book') {
      component = <Book setShowComponent={setShowComponent}/>;
      home = false;
      color = 'black';
    } else if (showComponent.toLowerCase() === 'pricing') {
      component = <Pricing />;
      home = false;
      color = 'black';
    } else if (showComponent.toLowerCase() === 'confirmation') {
      component = <Confirmation />;
      home = false;
      color = 'black';
    } 
  }
  return (
    <div className="App">
      {home || <NavBar color={color} setShowComponent={setShowComponent}/>}
      {component}
      <Footer />
    </div>
  );
}

export default App;
