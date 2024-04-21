import { Link } from 'react-router-dom';

const Administrator = () => {

  return (
    <div className="bg-[#E6FCED] min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-4 md:px-20 py-20 lg:py-32">
      
          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight tracking-tighter text-primary mb-4 lg:mb-8">Administrator</h1>
          <p className="text-base lg:text-lg font-normal leading-tight text-secondary text-gray-500 mb-6 lg:mb-10">As the administrator of a music school, I will need to be able to create courses, view enrolments and review analytics for the entire school. I should also be able to see a cumulative view of all students in the school regardless of the course. Only I should be able to access this data through a username and password.</p>
          <Link to="/login" className="bg-[#FEDFE1] inline-block px-6 py-3 lg:py-4 rounded-md text-lg lg:text-xl font-semibold text-gray-800 hover:bg-opacity-90 transition duration-300 ease-in-out">Login</Link>
       
      </div>
      <div className="container px-4 md:px-28 py-4 lg:py-8 ">
        <p className="text-gray-500 ">Author: Glenn Fernandes</p>
        <p className="text-gray-500 ">Last Update: 22-08-2023</p>
      </div>
    </div>
  );
};

export default Administrator;
