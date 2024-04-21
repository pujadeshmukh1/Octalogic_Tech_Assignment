import WindowIcon from '@mui/icons-material/Window';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
  return (
    <div className=" h-[1024px]">
      <nav className="flex bg-[#FFFFFF] h-[950px]">
        <div className="space-y-4 mt-7">
        <div className='flex justify-center'>
          <img src="https://s3-alpha-sig.figma.com/img/b77e/850f/66a2299ddad75dbfff48fcc92195ba0a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nuTsHxoH3bgwQ4YKcgOufUSIHZAKtr2br0r719PBAjZP67iyiIIq8Nn11i5oc~NFyiiPcqCCArbpmvFhkJdWHsiLe6NUtnRYzmV2U6Ja9tvsTSL2J8UqcDMUFNXJE192P-2E0VQIQ6SuebUNmG6wQdv-r5A~KGaUxL9Vw7GRcnNmRciuPUexQxmd0mpLI0X7L0ltmYVzswTNUcKRqLgJ2npZk6PHCBvUa84phjps03Xeqcd~WpLohky8Cnd1y2-K9n1Zz9gWyPIquYYnyBUL8KOGvfs7lCwbCzobJ8PzZIRsbxvBg2yj47DeYfJsZeU3WdmIdtUk9WUCg-nAOe8Dcg__" 
           className='' alt="" />
       </div>

       
       <div className='flex justify-center bg-[#FEDFE1] mx-4 rounded-md'>
       <Link to="/home" >
       <div className=''>
       <WindowIcon sx={{ fontSize: 35 }} className='ml-2'/>
       <div>
        <p>
     
            <p  className="py-1 block font-poppin text-[20px] font-medium">
            Home
            </p>
                
      
        </p>
        </div>
         </div>
         </Link>
        </div>
       

        
        <div className='flex justify-center bg-[#FEDFE1] mx-4 rounded-md px-2'>
        <Link to="/coures">
           <div className=''>
               <QueueMusicIcon sx={{ fontSize: 35 }} className='ml-4'/>
            <div>
        
          
            <p  className="py-1 block font-poppin text-[20px] font-medium">
            Courses
            </p>
                
           
       
           </div>
         </div>
         </Link>
        </div>
        
        </div>
       
        
      </nav>

      <div >
        <div className='flex justify-center'>
          <LogoutIcon />
        </div>
        <div className='flex justify-center'> 
          <button className='font-bold text-gray-500'>Logout</button>
        </div>
      
      </div>
      
      
    </div>
  );
}

export default SideBar;
