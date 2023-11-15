import { FaEye } from "react-icons/fa"
import Greeny from "../../Images/Greeny.jpeg"
import Nostra from "../../Images/Nostra.PNG"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectList from "./ProjectList"

const Projects =()=> {

    const projectList = [
        {
            id : 1 ,
            image : Greeny ,
            url : "",
            icon : <FaEye/>
        },
        {
            id : 2 ,
            image : Nostra ,
            url : "",
            icon : <FaEye/>
        },
    ]

    AOS.init({duration:2000})
    return(
        <div id="project" className=" bg-black mt-3 p-2 text-white">
            <h1 className='font-bold p-3 text-5xl absolute opacity-5'>Project</h1>
            <h1 className='font-bold p-3 text-3xl relative ml-2 mb-1'>Projects</h1>
              
            <ProjectList projectList={projectList} className='' />
            </div>
    )
}
export default Projects;