
import html from '../../Images/HTML.png'
import css from '../../Images/CSS.png'
import js from '../../Images/JavaScript.png'
import bootstrap from '../../Images/Bootstrap.png'
import tailwind from '../../Images/TailwindCSS.png'
import reactjs from '../../Images/REACT.JS.png'
import nodejs from '../../Images/node.js.png'
import sql from '../../Images/SQL.png'
import resume from "../../Resume 🧾.pdf"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Skills = () => {

  AOS.init({duration:2000})

  return (
    <div className="bg-black text-white">
      <h1 className='font-bold p-3 text-5xl absolute opacity-5'>Skills</h1>
      <h1 className='font-bold p-3 text-3xl relative ml-2 mb-1'>Skills</h1>

      <div className="grid grid-cols-1 place-content-center place-items-center  md:grid-cols-2 md:place-conent-center md:place-items-center lg:grid-cols-3 p-1 gap-7">
        <img src={html} alt='' data-aos="zoom-in-up" className="w-[100px] "/>
        <img src={css} alt='' data-aos="zoom-in-up" className="w-[100px]"/>
        <img src={js} alt='' data-aos="zoom-in-up" className="w-[80px]"/>
        <img src={bootstrap} alt='' data-aos="zoom-in-up" className="w-[100px]"/>
        <img src={tailwind} alt='' data-aos="zoom-in-up" className="w-[100px]"/>
        <img src={reactjs} alt='' data-aos="zoom-in-up" className="w-[100px]"/>
        <img src={nodejs} alt='' data-aos="zoom-in-up"  className="w-[100px]"/>
        <img src={sql} alt='' data-aos="zoom-in-up" className="w-[100px]"/>
      </div>
      <div data-aos="zoom-in-up" className='flex justify-center items-center mt-7 p-2'>
      <a href={resume} target="blank"><button className="p-2 border bg-opacity rounded-md hover:bg-yellow-400">Download CV</button></a>
      </div>
    </div>
  )
}

export default Skills;
