import PeopleIcon from '@mui/icons-material/People';
const Card = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className='flex items-center'>
        <div className='border rounded-full bg-[#B2EECF] p-1'>
          <PeopleIcon sx={{ fontSize: 35 }} /> 
        </div>
       
        <div className='ml-2'>
          <h2 className="text-lg font-semibold mb-2 ">{title}</h2>
          <p className='text-gray-500 '>{content}</p>
        </div>
      </div>
      <p className='text-right text-[#901E75] mt-2'>View</p>
    </div>
  );
};

export default Card;

