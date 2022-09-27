import React, { useState, useEffect } from 'react'
import './gallary.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pagination from './Pagination'
// import cImage1 from './static/conferenceImg1.jpg'
// import cImage2 from './static/conferenceImg2.jpg'
// import cImage3 from './static/conferenceImg3.jpg'
// import cImage4 from './static/conferenceImg4.jpg'
// import cImage5 from './static/conferenceImg5.jpg'

import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
  // faFileImage
} from '@fortawesome/free-solid-svg-icons'

export const Gallary = () => {
  // const gallaryImages = [
  //   {
  //     img : cImage1
  //   },
  //   {
  //     img : cImage2
  //   },
  //   {
  //     img : cImage3
  //   },
  //   {
  //     img : cImage4
  //   },
  //   {
  //     img : cImage5
  //   }
  // ]
  const [slideNumber, setslideNumber] = useState(0)
  const [openModel, setopenModel] = useState(false)
  const [posts, setposts]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);


  useEffect(()=>{
    const fetchposts = async () =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setposts(res.data.slice(0,100));
      setLoading(false)
    }

    fetchposts();
  }, []);
  console.log(posts);

  //GET CURRENT POST
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //Change Page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber)

  const handleOpenModel = (index) => {
    setslideNumber(index);
    setopenModel(true)
  }

  const handleCloseModel = () => {
    setopenModel(false)
  }
  const prevSlide = () => {
    slideNumber === 0 ? setslideNumber(posts.length - 1) : setslideNumber(slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === posts.length
      ? setslideNumber(0)
      : setslideNumber(slideNumber + 1)
  }

  return (
    <div className='body'>
      {openModel &&
        <div className='slideWrap'>
          <FontAwesomeIcon className='btnClose' icon={faCircleXmark} onClick={handleCloseModel} />
          <FontAwesomeIcon className='btnPrev' icon={faCircleChevronLeft} onClick={prevSlide} />
          <FontAwesomeIcon className='btnNext' icon={faCircleChevronRight} onClick={nextSlide} />
          <div className="fullScreenImage">
            <img src={posts[slideNumber].url} alt="" />
          </div>
        </div>
      }

      <div className="py-1">
        <div className="sidem">
          <div className='mb-6 text-left gallary-head'>
            Gallary
          </div>
          <div className="gallaryWrap">
            {currentPosts && currentPosts.map((slide, index) => {
              return (
                <div className="single">
                  <div key={index} onClick={() => handleOpenModel(index)}>
                    <img src={slide.url} alt="" />
                  </div>
                  {/* <div key={index} onClick={() => handleOpenModel(index)}>
                    <span><FontAwesomeIcon icon={faFileImage} />J&K Initiate Barcoding</span>
                      <p>View photo</p>
                  </div> */}
                </div>
              )
            })}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts = {posts.length} paginate={paginate} />
        </div>
      </div>
      {/* <div className='picture-div py-2'>
        <div className='grid grid-flow-row md:grid-cols-4 sm:grid-cols-1 bg-black'>
          <div className='m-auto'>
            <img src={Cimage1} alt="Conference_Image 1" />
          </div>
          <div className='m-auto'>
            <img src={Cimage1} alt="Conference_Image 1" />
          </div>
          <div className='m-auto'>
            <img src={Cimage1} alt="Conference_Image 1" />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Gallary;