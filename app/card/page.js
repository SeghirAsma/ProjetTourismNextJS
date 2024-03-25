// // components/Card.js
// 'use client'
// import React from 'react';



// const Card = ({ title,name, content ,currentPage, totalPages, onPageChange}) => {
//     return (
//         <div >
//             <h2 >{title}</h2>
//             <h2 >{name}</h2>
            

//             <p>{content}</p>
//             <div className="pagination">
//             <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//             <span>{currentPage} of {totalPages}</span>
//             <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//            </div>
//        </div>
       
        
//     );
// };

// export default Card;
// Dans le composant ProgramDetails.jsx
import React from 'react';
import Content from "../content/page.js";

const ProgramDetails = ({ program }) => {
  return (
    <div>
      {/* <p>Reference Program: {program.referenceProgram}</p>
      <p>Name Program: {program.nameProgram}</p> */}
      {/* Autres détails du programme à afficher */}
    </div>
  );
}

export default ProgramDetails;
