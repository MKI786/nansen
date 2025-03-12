
import Landingpage from "./Landingpage/Landingpage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Signals from "./Signals/Signals";
import Smartmoney from "./Smartmoney/Smartmoney";
import Tokens from "./Tokens/Tokens";
import Nfts from './Nfts/Nfts';
import Hotcontracts from './Hotcontracts/Hotcontracts';
import Chaingrowth from './Chaingrowth/Chaingrowth';
import Ecosystems from './Ecosystems/Ecosystems';
import Research from './Research/Research';
import Portfolio from './Portfolio/Portfolio';
import Smartalerts from './Smartalerts/Smartalerts';
import Watchlists from './Watchlist/Watchlist';
import Whatsnew from './Whatsnew/Whatsnew';
import Help from './Help/Help';
import Smartsegment from './Smartsegment/Smartsegment';



function App() {

  return (
    <>

  <BrowserRouter>
<Routes>
        <Route path="/" element={<Landingpage />} />

        <Route path="/Layout" element={<Layout />}>

          <Route path="Home" element={<Home />} >
          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          </Route>

          <Route path="Signals" element={<Signals/>} />
          <Route path="Smartmoney" element={<Smartmoney/>} />
          <Route path="Tokens" element={<Tokens/>} />
          <Route path="Nfts" element={<Nfts/>} />
          <Route path="Hotcontracts" element={<Hotcontracts/>} />
          <Route path="Chaingrowth" element={<Chaingrowth/>} />
          <Route path="Ecosystems" element={<Ecosystems/>} />
          <Route path="Research" element={<Research/>} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Smartalerts" element={<Smartalerts />} />
          <Route path="Smartsegments" element={<Smartsegment />} />
          <Route path="Watchlists" element={<Watchlists />} />
          <Route path="Whatsnew" element={<Whatsnew />} />
          <Route path="Help" element={<Help />} />

          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />
          <Route path="" element={<Home />} />

        </Route>


        
</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
