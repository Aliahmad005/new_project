import React , {useEffect , useRef} from 'react';
import Card from '../card/Card';
import { FaHome, FaNewspaper, FaFootballBall, FaClock, FaInfoCircle , FaSignOutAlt} from 'react-icons/fa';
import { GiVote } from 'react-icons/gi';
import { IoMdFilm } from 'react-icons/io';
import { AiFillCaretUp } from 'react-icons/ai';
import { FiTrendingUp } from 'react-icons/fi';
import { BiSortAZ } from 'react-icons/bi';
import Profile from '../profileCard/Profile';
import { Image } from 'react-bootstrap';
import data from '../data/data.json'


const Home = () => {
    console.log('data' , data)
    const limitedData = data.slice(0, 15);

    return (
        <div>





            <div className='md:flex lg:flex sm:flex'>

                <div  className='lg:w-1/4 md:w-fit sm:fit hidden md:block sm:block lg:block   '>



                    <div className='ml-16 mr-5'>
                        <div className='sidDash'>

                            <div className='productPageLCatMain md:w-fit sm:w-fit lg:w-full lg:block md:hidden sm:hidden hidden'>
                            <Profile/>
                            </div>
                          
                            <div className='productPageLCatMain md:w-fit sm:w-fit lg:w-full'>
                                <div className='md:flex sm:flex sm:justify-center md:justify-center lg:hidden md:block sm:block'>
                                    <Image src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 w-10 mt-3 " />		

                                </div>
                          
                                <div className='flex'>
                                    <div className='mt-[20px] mb-[20px]'>
                                        <FaHome className='lg:ml-3 lg:mr-3 mb-3  md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 ' />
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>Dashbord</h5>
                                </div>
                                <div className='flex'>
                                    <div className=''>
                                        <FaHome className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mb-[20px] text-gray-500' />
                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block'> Dashboard</p>
                                </div>

                            </div>
                            <div className='productPageLCatMain md:w-fit sm:w-fit lg:w-full'>
                                <div className='flex'>
                                    <div className='mt-[20px] mb-[20px]'>
                                        <FaNewspaper className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5' />
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>News Filter</h5>
                                </div>
                                <div className='flex'>
                                    <div className=''>
                                        <FaFootballBall className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />
                                    </div>

                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Sports</p>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <GiVote className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />
                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Politics</p>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <IoMdFilm className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Entertainment</p>
                                </div>
                            </div>

                            <div className='productPageLCatMain md:w-fit sm:w-fit lg:w-full'>
                                <div className='flex'>
                                    <div className='mt-[20px]'>
                                        <AiFillCaretUp className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mb-3 mb-[20px]' />
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>Sort by</h5>

                                </div>

                                <div className='flex'>
                                    <div>
                                        <FaClock className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Time</p>

                                </div>

                                <div className='flex'>
                                    <div>
                                        <FiTrendingUp className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Trending</p>

                                </div>
                                <div className='flex'>
                                    <div>
                                        <BiSortAZ className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Alphabeticaly</p>
                                </div>
                                <div className='flex'>
                                    <div className='mt-[20px]'>
                                        <FaInfoCircle className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mb-3' />
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>About</h5>
                                </div>
                                <div className='flex'>
                                <div>
                                        <FaInfoCircle className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />

                                    </div>
                                <p className='productPageLCatMenu sm:hidden md:hidden lg:block'>About Us</p>

                                </div>
                                <div className='flex'>

                                <div>
                                        <FaSignOutAlt className='lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' />

                                    </div>
                                <p className='productPageLCatMenu sm:hidden md:hidden lg:block'>LogOut</p>
                                </div>
                            </div>

                        </div>

                    </div>




                </div>



                <div  className='lg:w-2/4 md:w-9/12 sm:w-9/12 w-full flex justify-center'>
                    <div>
                        {
                            limitedData.map((data)=>{
                            return    <Card data={data} />
                           
                            })
                        }
                    </div>
                </div>



                <div className='w-1/4 lg:block md:hidden sm:hidden hidden'>




                    <div className='ml-5 mr-16'>
                        <div className='sidDash'>



                            <div className='productPageLCatMain'>
                                <h5 className='productPageLCatHeading'>News Updates</h5>
                                <p className='productPageLCatMenu' >today letest updates</p>
                                <p className='productPageLCatMenu' >today letest updates</p>
                                <p className='productPageLCatMenu' >today letest updates</p>
                                <p className='productPageLCatMenu' >today letest updates</p>





                            </div>

                        </div>

                    </div>





                </div>


            </div>



        </div>
    );
}

export default Home;
