// 'use client' 
// import Card from '../card/page';
// import Pagination from '../pagination/page';
// import axios from 'axios';
// import React , {useState, useEffect,useRef} from "react";
// import ReactPlayer from 'react-player';

// const ITEM_SIZE = 1; // Number of items per page

// const IndexPage = () => { 
//     const [programs, setPrograms] = useState([]); 

//     useEffect(() => {
//         const getAllPrograms = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8099/api/programs/approved'); 
//                 setPrograms(response.data.map(program => ({ ...program, currentPage: 1 })));
           
//         console.log("data", response.data)  
//             } catch (error) {
//                 console.error('Error fetching programs:', error);
//             } 
//         };
//         getAllPrograms();
//     }, []);

 

//     const onItemChange = (programIndex, page) => {
//         const updatedPrograms = [...programs];
//         updatedPrograms[programIndex].currentPage = page;
//         setPrograms(updatedPrograms);
//     };

//     return (
//         <div>
      
//         {programs.map((program, index) => (
//              <div key={index} > 
//              <div key={index} >
//             <div key={program.id}>
//                 <Card title={program.referenceProgram} name={program.nameProgram}
//                       content={program.contents
//                         .slice((program.currentPage - 1) * ITEM_SIZE, ((program.currentPage - 1) * ITEM_SIZE) + ITEM_SIZE)
//                         .map((content, contentIndex) => (
//                             <ReactPlayer
//                                 key={content.id}
//                                 url={`http://localhost:8099/api/contenus/videos/${encodeURIComponent(content.videoContenuUrl.split('/').pop())}`}
//                                 controls={true}
//                                 playing={true}
//                                 style={{ height: 'auto', width: '400px', alignItems: 'center' }}
//                             />
                         
//                         ))}
//                       currentPage={program.currentPage}
//                       totalPages={Math.ceil(program.contents.length / ITEM_SIZE)}
//                       onPageChange={page => onItemChange(index, page)}
//                 />
//             </div>
//             </div>
//             </div>
//         ))}
//     </div>
   





//         // <div>
//         //     {programs.map(program => (
//         //         <Card key={program.id} title={program.referenceProgram} name={program.nameProgram}
//         //          content ={program.contents.slice((currentItem - 1) * ITEM_SIZE, ((currentItem - 1) * ITEM_SIZE) + ITEM_SIZE)
//         //             .map((content, contentIndex) => (
//         //             <ReactPlayer
//         //               key={content.id}
//         //               url={`http://localhost:8099/api/contenus/videos/${encodeURIComponent(content.videoContenuUrl.split('/').pop())}`}
//         //               controls={true}
//         //               playing={true}
//         //               style={{ height: 'auto', width: '400px', alignItems: 'center' }}
//         //             />
//         //           ))} currentPage={currentItem} totalPages={program.contents.map((content, contentIndex) => (
//         //             content.length ))} onPageChange={onItemChange}/>
//         //     ))} 
//         // </div>
//     );
// };

// export default IndexPage;
