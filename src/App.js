import React from 'react';
import ProfilePic from './components/profile-pic/profile-pic';
import SocialsFooter from './components/socials-footer/socials-footer';
import Details from './components/details/details';
import sun from "./media/sun.png";
import moon from "./media/moon.png";


function App() {
  const [theme, setTheme] = React.useState("light");
  
  function Toggle() {
    setTheme(prevTheme => {
      if (prevTheme === "light") {
        return "dark"
      } else {
        return "light"
      }
    })
    console.log("tog")
  }

  return (
    <main className={theme}>
      <div className="container">
        <img className="sun-moon" src={(theme === "light") ? sun : moon} onClick={Toggle} alt='' /> 
        <ProfilePic />
        <Details />
        <SocialsFooter />
      </div>
    </main>
  );
}

export default App;
