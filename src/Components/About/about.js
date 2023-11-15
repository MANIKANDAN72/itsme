import React from 'react';
import img1 from '../../Images/img-1.jpeg';
import img2 from '../../Images/img-2.jpeg';
import AOS from 'aos'
import 'aos/dist/aos.css'


function About() {
    AOS.init({duration:2000})
    return (
        <div id="about" className="about bg-black mt-3 md:mt-6 p-2 text-white ">
            <h1 className='font-bold p-3 text-5xl absolute opacity-5 '>About</h1>
            <h1 className='font-bold p-3 text-3xl relative  ml-2 mb-1'>About Me</h1>

           <div className='grid place-content-center place-items-center mt-3 gap-y-3 '>
        
           <div className=' flex gap-2 md:m-3 md:gap-7' >
            <img src={img2} alt='' data-aos="fade-right"  className=' w-[175px] h-[90px] md:mt-6 md:w-[250px] md:h-[150px] lg:w-[375px] lg:h-[200px] rounded-[10px]  object-cover'/>
            <img src={img1} alt='' data-aos="zoom-out-left" className=" w-[110px] md:mt-16 md:w-[175px] lg:w-[225px] rounded-[20px]  mt-6 p-2 object-cover"/>
            </div> 
            
            <h3 data-aos="fade-up" className='bg-zinc-950 rounded p-3 flex flex-col gap-3 '>Greetings, I'm Manikandan, hailing from Tirunelveli, a city that holds a special place in my heart and is just 50 kilometers away from my hometown, Sirumalanji. I recently graduated with a degree in Information Technology from Dr. SNS Rajalakshmi College of Arts and Science in Coimbatore.
 <span>  As a dedicated and passionate web developer, I come equipped with a robust foundation in front-end development and a sharp focus on enhancing user experiences. My profound enthusiasm lies in the creation of responsive, user-friendly websites that address real-world challenges. I'm eagerly looking forward to opportunities to contribute my skills to dynamic and innovative projects, thus turning my aspiration of establishing a career in this field into a reality.</span>

Beyond the realm of technology, my soul longs for exploration through travel. It's not just a hobby; it's a resolute dream I'm committed to pursuing. During my leisure hours, I indulge in watching videos about gadgets and various technologies. My long-term vision involves accumulating knowledge and financial stability to support my family and extend a helping hand to those in need.</h3>

           </div>
            
            
           </div>
        
    )
}

export default About;
