import './App.css';
import AboutMe from './components/about-me';
import Header from './components/header';
import HomePage from './components/home-page';
import MyFamily from './components/my-family';
import MyHobbies from './components/my-hobbies';
import MyProfession from './components/my-profession';
import MyNavyCareer from './components/navy-career';
import Route from './components/router';
import Subscription from './components/subscription';
import Footer from './components/footer';
import backgroundImg from './images/background.jpg'

// TODO: need to route back to home on refresh


function App() {
  return (
    <div className="App" style={{
      backgroundImage:  `url(${backgroundImg})`
    }}>
      <Header />
      <Route path="/">
        <HomePage></HomePage>
      </Route>
      <Route path="/about-me">
        <AboutMe></AboutMe>
      </Route>
      <Route path="/my-family">
        <MyFamily></MyFamily>
      </Route>
      <Route path="/my-hobbies">
        <MyHobbies></MyHobbies>
      </Route>
      <Route path="/my-profession">
        <MyProfession></MyProfession>
      </Route>
      <Route path="/navy-career">
        <MyNavyCareer></MyNavyCareer>
      </Route>
      <Route path="/subscribe">
        <Subscription></Subscription>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
