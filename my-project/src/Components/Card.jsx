import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className='flex items-center'>
        <AccountCircleIcon sx={{ fontSize: 40 }} />
        <div className='ml-2'>
          <h2 className="text-lg font-semibold mb-2 ">{title}</h2>
          <p className='text-gray-500 '>{content}</p>
        </div>
      </div>
      <p className='text-right text-blue-500 mt-2'>View</p>
    </div>
  );
};

export default Card;

