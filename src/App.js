import Footer from './Components/footer';
import Header from './Components/header';
import {Routes,Route } from "react-router-dom/dist";
import Home from './Pages/home';
import Sheets from './Pages/sheet';
import Categrorys from './Pages/category';
import Error404 from './Pages/404';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Sheets" element={<Sheets/>}/>
          <Route path="/Categrorys" element={<Categrorys/>}/>
          <Route path="/Error404" element={<Error404/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
