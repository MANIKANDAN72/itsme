import {RiGraduationCapFill} from 'react-icons/ri'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Resume = () => {

  AOS.init({duration:2000})

  return (
    <div id="resume" className=" bg-black flex flex-col gap-4 p-2 text-white">
       <h1 className='font-bold p-3 text-5xl absolute opacity-5 '>Resume</h1>
       <h1 className='font-bold p-3 text-3xl relative  ml-2 mb-1'>Resume</h1>
       <RiGraduationCapFill className='text-yellow-500 w-[100px] h-[100px]'/>

        <div className="flex flex-col justify-center items-center gap-y-3 p-2 md:flex md:flex-col md:gap-[200px] lg:grid lg:grid-cols-2 lg:place-content-around lg:place-items-center lg:gap-3">
        
        <div data-aos="zoom-out-right" className=" text-zinc-400 bg-zinc-950 p-3 rounded w-[300px] md:w-[450px] lg:w-[350px] md:mr-20 lg:ml-[250px]">
          <span class=" text-yellow-400 font-bold  text-xl">2023</span>
          <h2 className="text-white font-semibold">WEB DEVELOPER</h2>
          <span class="text-zinc-300 font-bold text-base">Self Study</span>
          <p className="">
          Stepping into my career, I committed to self-study, focusing on web development. With dedication, I mastered HTML, CSS, JavaScript, and React, equipping myself for a promising start in the world of coding.
          </p>
        </div>
        <div data-aos="zoom-out-left" className=" text-zinc-400 bg-zinc-950 p-3 rounded  w-[300px] md:w-[450px] lg:w-[350px] md:ml-28 lg:mr-[250px] ">
          <span class=" text-yellow-500 font-bold text-xl">2020-2023</span>
          <h2 className="text-white font-semibold">Information Technology</h2>
          <span class="text-zinc-300 font-bold text-base">Bharathiar University</span>
          <p className="">
          My college journey led me to BSc. Information Technology, where I savored the coursework, honed my communication skills, and broadened my horizons. Meeting diverse people fostered lifelong friendships while enriching my skills and knowledge.
          </p>
        </div>
        <div data-aos="zoom-out-right" className=" text-zinc-400 bg-zinc-950 p-3 rounded  w-[300px] md:w-[450px] lg:w-[350px] md:mr-20 lg:ml-[250px]">
          <span class=" text-yellow-500 font-bold text-xl">2019-2020</span>
          <h2 className="text-white font-semibold">12th</h2>
          <span class="text-zinc-300 font-bold text-base">GOVT HSC SCHOOL</span>
          <p class="">
          In 2019-2020, I completed 12th grade, majoring in computer science. For college, I delved into course details, researched universities, and prepared for the next chapter of my education with enthusiasm.
          </p>
        </div>
        <div data-aos="zoom-out-left" className=" text-zinc-400 bg-zinc-950 p-3 rounded  w-[300px] md:w-[450px] lg:w-[350px] md:ml-28 lg:mr-[250px]">
          <span class="text-yellow-500 font-bold text-xl">2018-2019</span>
          <h2 className="text-white font-semibold">10th</h2>
          <span class="text-zinc-300 font-bold text-base">GOVT HIGH SCHOOL</span>
          <p class="">
          In 2018, after completing the 10th grade, I was at a crossroads, unsure of my educational path. Over time, I explored my interests, set goals, and embarked on a journey towards a fulfilling future.
          </p>
        </div>
        </div>
      </div>
  )
}

export default Resume;
