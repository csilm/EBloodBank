import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumber = [];
    for (let i = 0; i < Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumber.push(i)  
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumber.map(number=>(
                <li key={number} className = 'inline m-6 p-4 underline '>
                    <a href="!#" onClick={()=> paginate(number)}> {number+1} </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination