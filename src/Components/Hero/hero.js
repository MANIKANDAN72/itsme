import hero from "../../Images/hero.jpg";
import resume from "../../Resume 🧾.pdf"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  AOS.init({duration:2500})

  return (
    <div id="home" className="hero w-full bg-black text-zinc-400 grid mt-[50px]  h-[350px] md:grid-cols-2 md:place-content-between" >
      <div className="flex flex-col mt-16 md:mt-20 gap-3 ml-5 justify-start md:mx-auto  text-white z-10 lg:gap-2">
        <p className="font-semibold text-xl text-yellow-500 lg:text-3xl">Hello !</p>
        <h1 className="font-extrabold text-3xl lg:text-4xl ">
          I'm <span className="text-yellow-500">MANIKANDAN</span>
        </h1>
        <h2 className="font-bold text-3xl lg:text-4xl">Web Developer</h2>
        <div className="mt-5 flex gap-2">
          <a href={resume} target="blank"><button className="p-2 border bg-opacity rounded-md hover:bg-yellow-400">Download CV</button></a>
        </div>
      </div>
     <div className=' hidden md:flex lg:mr-[175px] lg:w-[400px]'>
      <img src={hero} alt='' data-aos="zoom-in-up"/>
     </div>
    </div>
  )
}

export default Hero;
