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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export const AppContext = createContext(null);

function App() {
  const [recomendedHobbyData, setrecomendedHobbyData] = useState({});
  const [contextFormData, setContextFormData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        contextFormData,
        setContextFormData,
        recomendedHobbyData,
        setrecomendedHobbyData
      }}>
      <div className="App" style={{
        backgroundImage: `url(${backgroundImg})`
      }}>

        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/my-family" element={<MyFamily />} />
            <Route path="/my-hobbies" element={<MyHobbies />} />
            <Route path="/my-profession" element={<MyProfession />} />
            <Route path="/navy-career" element={<MyNavyCareer />} />
            <Route path="/subscribe" element={<Subscription />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
