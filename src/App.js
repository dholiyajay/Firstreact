
import './App.css';
// import City from './user/component/City';
import CityFun from './user/component/CityFun';
// import Citycountry from './user/component/Citycountry';
// import Counter from './user/component/Counter';
// import Country from './user/component/Country';
import CountryFuc from './user/component/CountryFuc';
import Doctor from './user/container/doctor/Doctor';
import Medicines from './user/container/medicines/Medicines';
// import Countrycity from './user/component/Countrycity';
// import Dec from './user/component/Dec';
import Home from './user/component/Home'
import Time from './user/container/time/Time';
import TimeFuc from './user/container/time/TimeFuc';
import Producat from './user/container/producat/Producat';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './user/component/Header/Header';
import Content from './user/container/Content/Content';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      {/* <City /> */}
      {/* <Country /> */}
      {/* <CountryFuc /> */}
      {/* <CityFun /> */}
      {/* <Counter /> */}
      {/* <Dec /> */}
      {/* <Countrycity /> */}
      {/* <Citycountry /> */}
      {/* <Medicines /> */}
      {/* <Doctor /> */}
      {/* <Home/> */}
      {/* <Time /> */}
      {/* <TimeFuc /> */}
      {/* <Producat /> */}
      {/* <Header /> */}
      <Header />


    <Routes>
      <Route exact path = "/" element={<Home/>} />
      <Route exact path = "/Producat" element={<Producat/>} />
      <Route exact path = "/Content" element={<Content/>} />

    </Routes>

    </>

  );
}

export default App;
