import { DiCode } from "react-icons/di";
import { FaPhotoVideo } from "react-icons/fa";
import { CgDesignmodo } from "react-icons/cg";
import { AiFillAndroid } from "react-icons/ai";
import { FaRegWindowMinimize } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { HiCommandLine } from "react-icons/hi2";
import hustle from "../../Images/hustle.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const MyBlog = () => {

  AOS.init({duration:2000})

  return (
    <div id="myblog" className="bg-black text-white">
      <h1 className="font-bold p-3 text-5xl absolute opacity-5 ">My Blog</h1>
      <h1 className="font-bold p-3 text-3xl relative  ml-2 mb-1">My Blog</h1>
      <p className=' p-4 '>As a passionate and motivated web developer, I bring a strong foundation in front-end and back-end development, along with a keen eye for user experience. I thrive on creating responsive, user-friendly websites that solve real-world problems and am eager to contribute my skills to dynamic and innovative projects.</p>

      <div  className="grid place-content-center place-items-center md:grid-cols-2 md:place-conent-center md:place-items-center lg:grid-cols-3 gap-y-4 gap-3 p-2 ">

        <div data-aos="zoom-in-up" className=" text-zinc-400 bg-zinc-950 w-[300px] h-[225px]  flex flex-col justify-center items-center ">
          <HiCommandLine className="text-yellow-500 w-[100px] h-[100px]" />
          <h2>WEB DEVELOPER</h2>
          <h1 className="text-yellow-600  ">
            <FaRegWindowMinimize />
          </h1>
        </div>
        <div data-aos="zoom-in-up" className=" text-zinc-400 bg-zinc-950 w-[300px] h-[225px]  flex flex-col justify-center items-center ">
          <FaPhotoVideo className="text-yellow-500 w-[100px] h-[100px]" />
          <h2>PHOTOGRAPY</h2>
          <h1 className="text-yellow-600  ">
            <FaRegWindowMinimize />
          </h1>
        </div>
        <div data-aos="zoom-in-up" className=" text-zinc-400 bg-zinc-950 w-[300px] h-[225px]  flex flex-col justify-center items-center ">
          <CgDesignmodo className="text-yellow-500 w-[100px] h-[100px]" />
          <h2>Web Design</h2>
          <h1 className="text-yellow-600  ">
            <FaRegWindowMinimize />
          </h1>
        </div>
        <div data-aos="zoom-in-up" className=" text-zinc-400 bg-zinc-950 w-[300px] h-[225px]  flex flex-col justify-center items-center ">
          <AiFillAndroid className="text-yellow-500 w-[100px] h-[100px]" />
          <h2>Andrid</h2>
          <h1 className="text-yellow-600  ">
            <FaRegWindowMinimize />
          </h1>
        </div>
        <div data-aos="zoom-in-up" className=" text-zinc-400 bg-zinc-950 w-[300px] h-[225px]  flex flex-col justify-center items-center ">
          <AiFillApi className="text-yellow-500 w-[100px] h-[100px]" />
          <h2>Api</h2>
          <h1 className="text-yellow-600  ">
            <FaRegWindowMinimize />
          </h1>
        </div>
        <div data-aos="zoom-in-up" className=" text-zinc-400 bg-zinc-950 w-[300px] h-[225px]  flex flex-col justify-center items-center ">
          <DiCode className="text-yellow-500 w-[100px] h-[100px]" />
          <h2>Developer</h2>
          <h1 className="text-yellow-600  ">
            <FaRegWindowMinimize />
          </h1>
        </div>
      </div>

      <div className="grid place-content-center place-items-center gap-y-3 p-2">
        <p className="text-center p-3">
          Everybody's a web designer until,you know,they actually try to do it.
        </p>
        <div  className='grid  gap-y-3 lg:grid lg:grid-cols-3  gap-3 p-2 '>
        <div data-aos="zoom-in-up" className="bg-zinc-950 text-zinc-400 text-center flex flex-col justify-center content-center w-[300px] h-[150px]">
          <h1 className="text-yellow-500 text-lg font-bold">100</h1>
          <h2 className="font-semibold">Awards</h2>
        </div>
        <div data-aos="zoom-in-up" className="bg-zinc-950 text-zinc-400 text-center flex flex-col justify-center content-center w-[300px] h-[150px]">
          <h1 className="text-yellow-500 text-lg font-bold">102</h1>
          <h2 className="font-semibold">Cup of Coffee</h2>
        </div>
        <div data-aos="zoom-in-up" className="bg-zinc-950 text-zinc-400 text-center flex flex-col justify-center content-center w-[300px] h-[150px]">
          <h1 className="text-yellow-500 text-lg font-bold">10</h1>
          <h2 className="font-semibold">Projects</h2>
        </div>
        </div>
      </div>

      <div
        className=" flex flex-col justify-center items-center z-40 h-[350px] bg-center bg-fixed bg-cover relative"
        style={{backgroundImage: `url(${hustle})`}}
      >
        <div className="absolute w-full h-full top-0 bg-black bg-opacity-70"></div>
        <h1 className="font-extrabold text-[25px] text-center absolute top-[20%] z-20 ">
          I'am <span className=" text-yellow-500">Available</span> for
          freelancing
        </h1>
        <p className="text-white text-center absolute top-[50%] z-20">
          I design and develop experiences that make people's lives simple.
        </p>
      </div>
    </div>
  )
}

export default MyBlog;
