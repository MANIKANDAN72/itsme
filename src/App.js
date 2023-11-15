import React from 'react';
import Navbar from '../src/Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about';
import Resume from './Components/Resume/resume';
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/project';
import MyBlog from './Components/My Blog/myblog';
import Tuch from './Components/Get In Tuch/tuch';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Hero/>
      <About/>
      <Resume/>
      <Skills/>
      <Projects/>
      <MyBlog/>
      <Tuch/>
      <Footer/>
    </div>
  );
}

export default App;
