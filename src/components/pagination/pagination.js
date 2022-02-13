import React from 'react';
import '../pagination/pagination.css';

const Pagination = ({dataPerPage,totalData, paginate}) => {
    const pageNumber = [];
    for(let i=1;i<=Math.ceil(totalData/dataPerPage); i++){
        pageNumber.push(i);
    }
    return (
            <ul className='pagination-cont' id="list">
                {pageNumber.map(number =>{
                   return <li key={number} className={`list${number}`}>
                       <a onClick={()=> paginate(number)}>{number}</a>
                   </li>
                })}
            </ul>
    );
}

export default Pagination;
