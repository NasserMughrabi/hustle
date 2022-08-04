import Home from "./components/Home";
import Book from "./components/Book";
import Footer from "./components/Footer";
import {useState} from 'react'

function App() {

  const [showComponent, setShowComponent] = useState('home');
  let component = <Home setShowComponent={setShowComponent}/>;

   if(showComponent){
    if (showComponent.toLowerCase() === 'home'){
      component = <Home setShowComponent={setShowComponent}/>;
    } else if (showComponent.toLowerCase() === 'book') {
      component = <Book setShowComponent={setShowComponent}/>;
    } 
  }
  return (
    <div className="App">
      {component}
      <Footer />
    </div>
  );
}

export default App;
