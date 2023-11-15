import AOS from 'aos'
import 'aos/dist/aos.css'

function ProjectList({ projectList }) {
  
  AOS.init({duration:2000})

  return (
    <div className='grid gap-5 place-content-center place-items-center mt-10 grid-cols-1 md:grid-cols-2'>
      {projectList.map(function (item) {
        return (
          <div className="">
            <img
              src={item.image}
              alt={`Project ${item.id}`}
              className=" w-[300px] h-[300px] gap-2 rounded" data-aos="zoom-in-up"/>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
