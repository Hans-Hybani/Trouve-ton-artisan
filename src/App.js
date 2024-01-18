import Footer from './Components/footer';
import Header from './Components/header';
import {Routes,Route } from "react-router-dom/dist";
import Home from './Pages/home';
import Sheets from './Pages/sheet';
import Error404 from './Pages/404';
import Batiment from './Pages/batiment';
import Service from './Pages/service'
import Fabrication from './Pages/fabrication'
import Alimentation from './Pages/alimentation';
import Accessibility from './Mention/accessibility'
import Cookie from './Mention/cookie'
import MentionLegale from './Mention/legale'
import DonnePersonnelle from './Mention/personelle'
import SearchArti from './Pages/search';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Sheets" element={<Sheets/>}/>
          <Route path="/Batiment" element={<Batiment/>}/>
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Fabrication" element={<Fabrication/>}/>
          <Route path="/Alimentation" element={<Alimentation/>}/>
          <Route path="/Accessibility" element={<Accessibility/>}/>
          <Route path="/Cookie" element={<Cookie/>}/>
          <Route path="/MentionLegale" element={<MentionLegale/>}/>
          <Route path="/DonnePersonnelle" element={<DonnePersonnelle/>}/>
          <Route path="/Search" element={<SearchArti/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
