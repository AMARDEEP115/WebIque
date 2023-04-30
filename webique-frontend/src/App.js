import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AllRoutes from './MainRouter/AllRoutes';

let auth=localStorage.getItem("webiqueAuth") || false;

function App() {
  const [isAuth,setIsAuth]=useState(auth);

  return (
    <div className="App">
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <AllRoutes isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Footer/>
    </div>
  );
}

export default App;
