import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io5'
import {FaMapSigns} from 'react-icons/fa'
import {BsFillPhoneFill} from 'react-icons/bs'
import {IoMailUnread} from 'react-icons/io5'
import {TbWorldWww} from 'react-icons/tb'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {

  AOS.init({duration:2000})

  return (
    <footer className="bg-zinc-950 text-zinc-400 mt-7 ">

<div className=' gap-16 md:flex md:justify-center md:items-center md:p-7 lg:gap-20'>

<div data-aos="zoom-in-up" className='flex flex-col justify-center items-center p-3 md:p-1 '>
    <FaMapSigns className='text-yellow-500 h-[50px] w-[50px] '/>
    <h4 className='text-zinc-300 font-bold text-center md:text-[15px] '>ADDRESS</h4>
    <p className='text-zinc-400 text-sm text-center w-[160px] md:text-[15px]'>Tirunelveli</p>
</div>
<div data-aos="zoom-in-up" className='flex flex-col justify-center items-center p-3 md:p-1'>
    <BsFillPhoneFill className='text-yellow-500 h-[50px] w-[50px] '/>
    <h4 className='text-zinc-300 font-bold text-center md:text-[15px]'>PHONE</h4>
    <p className='text-zinc-400 text-sm text-center w-[150px] md:text-[15px]'>+91 9344779408</p>
</div>
<div data-aos="zoom-in-up" className='flex flex-col justify-center items-center p-3 md:p-1'>
    <IoMailUnread className='text-yellow-500 h-[50px] w-[50px] '/>
    <h4 className='text-zinc-300 font-bold text-center md:text-[15px]'>EMAIL</h4>
    <p className='text-zinc-400 text-sm text-center w-[200px] md:text-[15px]'>manikandanj373@gmail.com</p>
</div>
<div data-aos="zoom-in-up" className='flex flex-col justify-center items-center p-3 md:p-1'>
    <TbWorldWww className='text-yellow-500 h-[50px] w-[50px]'/>
    <h4 className='text-zinc-300 font-bold text-center md:text-[15px]'>WEB</h4>
    <p className='text-zinc-400 text-sm text-center w-[150px] md:text-[15px]'>www.site.com</p>
</div>
</div>
      
      <div className='text-center '>
        <p>Copyright ©2023 All rights reserved | This template is made with</p>       
        <p>𓆩ᴍᴀ͢͢͢ɴɪᴋᴀɴᴅᴀɴ😉</p>
      </div>
      <div className=" mx-auto  flex flex-col gap-2">
        
        <div className="flex flex-row gap-2 mb-4 justify-center items-center">
            <a href="#twitter"><AiFillTwitterCircle  className='w-[25px] h-[25px]'/></a>
            <a href="#facebook"><FaFacebookSquare  className='w-[25px] h-[25px]'/></a>
            <a href="#linkedin"><IoLogoLinkedin  className='w-[25px] h-[25px]'/></a>
          </div>
      </div>
      

    </footer>
  );
}

export default Footer;
