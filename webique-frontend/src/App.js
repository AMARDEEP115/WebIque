import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AllRoutes from './MainRouter/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
