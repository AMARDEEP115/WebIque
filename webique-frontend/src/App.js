import { useState } from 'react';
import Header from './Components/Header';          // Navbar OF Wesite.
import Footer from './Components/Footer';          // Footer OF Wesite.
import AllRoutes from './MainRouter/AllRoutes';    // All Routes OF Wesite.
import './App.css';

let auth=localStorage.getItem("webiqueAuth") || false;  // To get the data from local storage of admin authentication.

function App() {

  const [isAuth,setIsAuth]=useState(auth);  // To store Admin Authentication State.

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <AllRoutes isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Footer/>
    </div>
  );
}

export default App;
