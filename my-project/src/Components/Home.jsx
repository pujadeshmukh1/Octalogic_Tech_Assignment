import SideBar from "./SideBar";
import Card from "./Card";

const Home = () => {
  const cardsData = [
    { title: '164', content: 'total number of students' },
    { title: '12', content: 'total number of courses' },
    { title: '$2000', content: 'total amount earned' },
    { title: 'Guitar', content: 'best performing course' },
    { title: 'Flute', content: 'worst performing course' }
  ];

  const latestEnrollments = [
    { 
      enrollmentNo: '001',
      studentName: 'John Doe',
      courseName: 'Guitar',
      fees: '$100',
      enrollmentDate: '2024-04-20'
    },
    { 
      enrollmentNo: '002',
      studentName: 'Jane Smith',
      courseName: 'Piano',
      fees: '$120',
      enrollmentDate: '2024-04-21'
    },
    { 
      enrollmentNo: '003',
      studentName: 'Alice Johnson',
      courseName: 'Violin',
      fees: '$110',
      enrollmentDate: '2024-04-22'
    },{ 
        enrollmentNo: '002',
        studentName: 'Jane Smith',
        courseName: 'Piano',
        fees: '$120',
        enrollmentDate: '2024-04-21'
      }
    
  ];

  const bestStudentsEnrollments = [
    { 
      regNo: '0021',
      fName: 'John ',
      lName: 'Doe',
      course: '3',
      totalFees: '$300',
      regDate:'01-6-2023'
    },
    { 
        regNo: '0022',
        fName: 'John ',
        lName: 'Doe',
        course: '3',
        totalFees: '$300',
        regDate:'01-6-2023'
    },
    { 
        regNo: '0023',
        fName: 'John ',
        lName: 'Doe',
        course: '3',
        totalFees: '$300',
        regDate:'01-6-2023'
    },
    {
    regNo: '0024',
      fName: 'John ',
      lName: 'Doe',
      course: '3',
      totalFees: '$300',
      regDate:'01-6-2023'
    }
   
  ];
  

  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="bg-[#F4F4F4] w-full h-auto pb-4">
        <div className="mx-5 mt-5">
          <h1 className="text-2xl font-bold text-gray-500">Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cardsData.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} />
            ))}
          </div>

          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-gray-500 mt-4">LATEST ENROLMENTS</h1>
            <h1 className="text-xl font-bold text-[#901E75] mt-4">View All Courses</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mt-4 bg-white">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="px-4 py-2">Enr. No</th>
                  <th className="px-4 py-2">S Name</th>
                  <th className="px-4 py-2">C Name</th>
                  <th className="px-4 py-2">Fees</th>
                  <th className="px-4 py-2">Enr. Date</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {latestEnrollments.map((enrollment, index) => (
                  <tr key={index} className="border">
                    <td className="text-center px-4 py-2">{enrollment.enrollmentNo}</td>
                    <td className="text-center px-4 py-2">{enrollment.studentName}</td>
                    <td className="text-center px-4 py-2">{enrollment.courseName}</td>
                    <td className="text-center px-4 py-2">{enrollment.fees}</td>
                    <td className="text-center px-4 py-2">{enrollment.enrollmentDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Similarly for Best Students */}
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-gray-500 mt-4">BEST STUDENTS</h1>
            <h1 className="text-xl font-bold text-[#901E75] mt-4">View All Students</h1>
          </div>

          <div className="overflow-x-auto">
          <table className="w-full mt-4 bg-white">
    {/* Table Header */}
    <thead>
      <tr>
        <th className="px-4 py-2">Reg. No</th>
        <th className="px-4 py-2">F. Name</th>
        <th className="px-4 py-2">L. Name</th>
        <th className="px-4 py-2">Course #</th>
        <th className="px-4 py-2">Total Fees</th>
        <th className="px-4 py-2">Reg. Date</th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody>
      {bestStudentsEnrollments.map((enrollment, index) => (
        <tr key={index} className="border">
          <td className="text-center px-4 py-2">{enrollment.regNo}</td>
          <td className="text-center px-4 py-2">{enrollment.fName}</td>
          <td className="text-center px-4 py-2">{enrollment.lName}</td>
          <td className="text-center px-4 py-2">{enrollment.course}</td>
          <td className="text-center px-4 py-2">{enrollment.totalFees}</td>
          <td className="text-center px-4 py-2">{enrollment.regDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
