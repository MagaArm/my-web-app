import './App.css';
import AboutMe from './components/about-me';
import Header from './components/header';
import HomePage from './components/home-page';
import MyFamily from './components/my-family';
import MyHobbies from './components/my-hobbies';
import MyProfession from './components/my-profession';
import MyNavyCareer from './components/navy-career';
import Subscription from './components/subscription';
import Footer from './components/footer';
import backgroundImg from './images/background.jpg'
import Summary from './components/summary';
import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter as Redirect, Routes, Route, HashRouter } from 'react-router-dom';


export const AppContext = createContext(null);

function App() {
  const [recomendedHobbyData, setRecomendedHobbyData] = useState({});
  const [contextFormData, setContextFormData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        contextFormData,
        setContextFormData,
        recomendedHobbyData,
        setRecomendedHobbyData
      }}>
      <div className="App" style={{
        backgroundImage: `url(${backgroundImg})`
      }}>


        <HashRouter>
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/my-family" element={<MyFamily />} />
            <Route path="/my-hobbies" element={<MyHobbies />} />
            <Route path="/my-profession" element={<MyProfession />} />
            <Route path="/navy-career" element={<MyNavyCareer />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </HashRouter>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
