import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import HorizontalSplitTwoToneIcon from '@mui/icons-material/HorizontalSplitTwoTone';
import { v4 as uuidv4 } from 'uuid';
const Coures = () => {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  
 // Function to generate a unique identifier
 const generateUniqueId = () => {
  return uuidv4();
};

  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);

  
  const [newCoures, setNewCoures] = useState({
    name: "",
    description: "",
    instructor:"",
    instrument:"",
    dayOfWeek:"",
    ofStudents:"",
    price:"",
    status: "status",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [coures, setCoures] = useState([]);

  // Filter categories based on search query
  const filteredCategories = coures.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleForgotPasswordClick = () => {
  //   setShowForgotPasswordPopup(true);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCoures((prevCoures) => ({
      ...prevCoures,
      [name]: value,
    }));
  };

  const handleCancelAddItem = () => {
    setIsAddingItem(false);
    setNewCoures({
      name: "",
      description: "",
      instructor: "",
      instrument: "",
      dayOfWeek: "",
      ofStudents: "",
      price: "",
      status: "",
    });
  };

  const handleSaveItem = () => {
    // Generate a unique identifier for the new course
    const newCourse = { ...newCoures, _id: generateUniqueId() }; // You need to implement generateUniqueId() function
    
    // Save newCourse to local storage
    const updatedCategories = [...coures, newCourse];
    localStorage.setItem("coures", JSON.stringify(updatedCategories));
    setCoures(updatedCategories);
    setIsAddingItem(false);
    // Reset all fields to initial state
    setNewCoures({
      name: "",
      description: "",
      instructor: "",
      instrument: "",
      dayOfWeek: "",
      ofStudents: "",
      price: "",
      status: "",
    });
  };
  
  // When fetching courses from an external source or local storage
  useEffect(() => {
    const storedCategories = localStorage.getItem("coures");
    if (storedCategories) {
      const parsedCategories = JSON.parse(storedCategories);
      // Ensure that each course object has a unique identifier
      const updatedCategories = parsedCategories.map(course => ({
        ...course,
        _id: course._id || generateUniqueId() // Assign a new unique identifier if it doesn't exist
      }));
      setCoures(updatedCategories);
    }
  }, []);
  const handleForgotPasswordClose = () => {
    setShowForgotPasswordPopup(false);
  };
  // const handleForgotPasswordClick = (courseId) => {
  //   setSelectedCourseId(courseId);
  //   setShowForgotPasswordPopup(true);
  // };
  

  // const handleCourseAction = (action) => {
  //   // Find the selected course
  //   const selectedCourse = coures.find(course => course._id === selectedCourseId);
  //   if (!selectedCourse) return;

  //   // Update the status based on the action
  //   let updatedStatus;
  //   switch (action) {
  //     case 'edit':
  //       // Perform edit action
  //       break;
  //     case 'close':
  //       updatedStatus = 'closed';
  //       break;
  //     case 'archive':
  //       updatedStatus = 'archive';
  //       break;
  //     default:
  //       break;
  //   }

  //   // Update the status in the courses array
  //   const updatedCourses = coures.map(course => {
  //     if (course._id === selectedCourseId) {
  //       return { ...course, status: updatedStatus };
  //     }
  //     return course;
  //   });

  //   // Save the updated courses to local storage and state
  //   localStorage.setItem("coures", JSON.stringify(updatedCourses));
  //   setCoures(updatedCourses);

  //   // Close the popup
  //   setShowForgotPasswordPopup(false);
  // };
  const handlePopupOpen = (courseId, status) => {
    setSelectedCourseId(courseId);
    setShowForgotPasswordPopup(true);
    setSelectedAction(status === 'archive' ? 'unarchive' : 'archive');
  };
  
  const handleCourseAction = (action) => {
    const updatedCourses = coures.map(course => {
      if (course._id === selectedCourseId) {
        let updatedStatus;
        switch (action) {
          case 'edit':
            updatedStatus = 'Active';
            // Perform edit action
            break;
          case 'Closed':
            updatedStatus = 'Closed';
            break;
          case 'Archived':
            updatedStatus = 'Archived';
            break;
          case 'unarchive':
            updatedStatus = 'Active'; // Change status back to 'Active' when unarchiving
            break;
          default:
            break;
        }
        return { ...course, status: updatedStatus };
      }
      return course;
    });
  
    // Save the updated courses to local storage and state
    localStorage.setItem("coures", JSON.stringify(updatedCourses));
    setCoures(updatedCourses);
  
    // Close the popup
    setShowForgotPasswordPopup(false);
  };
  
  
  
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex">
        <SideBar />
        <div className="container mx-auto">
          <div className="bg-[#F4F4F4] pb-4 shadow-md px-4 py-3 h-auto">
           <h1 className="text-3xl font-bold mb-4 text-gray-500">Courses</h1>
            {!isAddingItem && (
              <div className="flex  mb-4">
                <div className="flex gap-3">
                  <h1 className="text-xl font-bold mb-4 text-gray-500">Course List</h1>
                </div>
                <div className="flex ml-auto">
                  <input
                    type="text"
                    placeholder="Search Items"
                    className="px-6 border border-gray-300 rounded"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                </div>
                )}
                {isAddingItem ? (
                <div>
                 
                  <div className="mb-4 mt-2">
                    <div className="flex  mx-[30%] bg-white">
                    <div className="w-[95%] mx-5">
                    <h1 className="font-semibold text-[20px] ml-1 mt-4">Add Coures</h1>
                       <div className="mt-5">
                        <input
                          type="text"
                          name="name"
                          placeholder="Coures Name"
                          className="p-2  border border-gray-300 w-full rounded mr-2"
                          value={newCoures.name}
                          onChange={handleInputChange}
                        />

                        <input
                          type="text"
                          name="description"
                          placeholder="Description"
                          className="p-2 border border-gray-300 w-[100%] rounded mr-2 mt-4"
                          value={newCoures.description}
                          onChange={handleInputChange}
                        />

                        <input
                          type="text"
                          name="instructor"
                          placeholder="Instructor"
                          className="p-2  border border-gray-300 w-full rounded mr-2 mt-4"
                          value={newCoures.instructor}
                          onChange={handleInputChange}
                        />


                        <input
                          type="text"
                          name="instrument"
                          placeholder="Instrument"
                          className="p-2  border border-gray-300 w-full rounded mr-2 mt-4"
                          value={newCoures.instrument}
                          onChange={handleInputChange}
                        />

                        <select
                            name="dayOfWeek"
                            value={newCoures.dayOfWeek}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 w-full rounded appearance-none focus:outline-none focus:border-blue-500 mt-4"
                        >
                        <option value="">Select Day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                        </select>

                        <input
                          type="text"
                          name="ofStudents"
                          placeholder="# of Students"
                          className="p-2  border border-gray-300 w-full rounded mr-2 mt-4"
                          value={newCoures.ofStudents}
                          onChange={handleInputChange}
                        />

                        <input
                          type="text"
                          name="price"
                          placeholder="Price"
                          className="p-2  border border-gray-300 w-full rounded mr-2 mt-4"
                          value={newCoures.price}
                          onChange={handleInputChange}
                        />
                        
                        <select
                          name="status"
                          className="p-2 border border-gray-300 w-full rounded appearance-none focus:outline-none focus:border-blue-500 mt-4"
                          value={newCoures.status}
                          onChange={handleInputChange}
                        >
                          <option value="Status">Status</option>
                          <option value="Active">Active</option>
                          <option value="Closed">Closed</option>
                          <option value="Archived">Archived</option>
                        </select>
                        <div className="flex justify-end py-4">
                      <button
                        className="border border-[#676767] text-black  mr-10  px-10 py-2 rounded-md"
                        onClick={handleCancelAddItem}
                      >
                        Cancel
                      </button>
                      <button
                        className="border bg-[#FEDFE1] border-[#676767] text-black px-10 py-2 rounded-md"
                        onClick={handleSaveItem}
                      >
                        Add Course
                      </button>
                    </div>
                    </div>
                    </div>
                    </div>
  
                    </div>
                </div>
                ) : (
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-4 bg-[#FFFF]">
                  <thead>
                    <tr className="">
                    <th className="p-2 flex justify-center ">
                    <p className="text-[20px]">Name</p>
                      </th>
                        <th className="p-2 ">
                           <div className="flex justify-center">
                             <p className="">Description</p>  
                           </div>
                        </th>

                        <th className="p-2 ">
                           <div className="flex justify-center">
                            <p className="">Instructor</p>  
                           </div>
                        </th>

                         <th className="p-2 ">
                           <div className="flex justify-center">
                               <p className="">Instrument</p>  
                           </div>
                         </th>

                         <th className="p-2 ">
                           <div className="flex justify-center">
                             <p className="">Day Of Week</p>  
                           </div>
                         </th>

                         <th className="p-2 ">
                           <div className="flex justify-center">
                             <p className=""># of Students</p>  
                           </div>
                         </th>

                         <th className="p-2 ">
                           <div className="flex justify-center">
                             <p className="">Price</p>  
                           </div>
                         </th>
  
                         <th className="p-2 ">
                           <div className="flex justify-center">
                             <p className="">Status</p>  
                           </div>
                         </th>

                         <th className="p-2 ">
                           <div className="flex justify-center">
                             <p className="">Action</p>  
                           </div>
                       </th>
        {/* Other table headers */}
      </tr>
    </thead>
    <tbody>
      {filteredCategories.map((course) => (
        <>
          <tr key={course._id} className="cursor-pointer border-black bg-white">
          <td className="p-2 text-center">{course.name}</td>
         <td className="p-2 text-center ">{course.description}</td>
         <td className="p-2 text-center ">{course.instructor}</td>
         <td className="p-2 text-center ">{course.instrument}</td>
         <td className="p-2 text-center ">{course.dayOfWeek}</td>
         <td className="p-2 text-center ">{course.ofStudents}</td>
         <td className="p-2 text-center ">{course.price}</td>
         <td className="p-2 text-center rounded-md" style={{ backgroundColor: course.status === 'Active' ? '#CFF9DF' : course.status === 'Closed' ? '#FEC0CA' : course.status === 'Archived' ? '#E5E7EB' : '' }}>
          {course.status}
         </td>
         <td className="p-2 ">
           <div className="flex space-x-2 justify-center">
           <HorizontalSplitTwoToneIcon onClick={() => handlePopupOpen(course._id)} />
          
           </div>
           
         </td>

          </tr>
          <tr key={`spacer_${course._id}`} className="border">
            <td colSpan="9"></td>
          </tr>
        </>
      ))}
    </tbody>
  </table>
</div>

            )}
             <div className="flex justify-end mt-[45%]">
              <button
                className="bg-[#FEDFE1] px-4 py-2 rounded text-black"
                onClick={() => setIsAddingItem(true)}
              >
                + Add Item
              </button>
            </div>
          </div>
          
        </div>
      </div>
      {showForgotPasswordPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white px-5 pb-4 pt-2 rounded-md">
      <div className="flex justify-end">
        <button onClick={handleForgotPasswordClose}>X</button>
      </div>
    
      <button onClick={() => handleCourseAction('edit')}>Edit Course</button><br />
      <button onClick={() => handleCourseAction('Closed')}>Close Course</button><br />
      <button onClick={() => handleCourseAction('Archived')}>Archived Course
     
</button>
    </div>
  </div>
)}

    </div>
  );
};

export default Coures;

