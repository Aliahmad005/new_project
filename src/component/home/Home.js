import React, { useEffect, useRef, useState } from 'react';
import Card from '../card/Card';
import { FaHome, FaNewspaper, FaFootballBall, FaClock, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import { GiVote } from 'react-icons/gi';
import { IoMdFilm } from 'react-icons/io';
import { AiFillCaretUp } from 'react-icons/ai';
import { FiTrendingUp } from 'react-icons/fi';
import { BiSortAZ } from 'react-icons/bi';
import Profile from '../profileCard/Profile';
import { Image } from 'react-bootstrap';
import data from '../data/data.json';
import Grid from '../grid/Grid';
import GridS from '../gridS/GridS';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const Home = () => {

    const limitedData = data.slice(0, 15);
    const [grid, setGrid] = useState(false)
    // for sticky useState
    const [chatWidth, setChatWidth] = useState(undefined);
    const [sidebarTop, setSidebarTop] = useState(undefined);
    const [sidebare, setSidebare] = useState('');




    //sticky





    const windowWidth = useRef(window.innerWidth)







    React.useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            setSidebare(window.innerWidth)

        }

        window.addEventListener('resize', handleResize)
    })





    useEffect(() => {
      
        if (chatWidth > 70) {
            setSidebarTop("617");
        } else {
            setSidebarTop("263");

        }
    }, [chatWidth]);


    useEffect(() => {
        const chatEl = document.querySelector('.getwidthe').getBoundingClientRect();

        setChatWidth(chatEl.width);


    }, [sidebare]);





    useEffect(() => {
        if (!sidebarTop) return;

        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);


        };
    }, [sidebarTop]);


    const isSticky = (e) => {
        const chatEl = document.querySelector('.sidebar');
        const scrollTop = window.scrollY;
        if (scrollTop >= sidebarTop - 10) {
            chatEl.classList.add('is-sticky');
        } else {
            chatEl.classList.remove('is-sticky');
        }
    };



    return (
        <div className=''>





            <div className='md:flex lg:flex sm:flex '>


                {/*Tab for mobail view*/}
                <div className='lg:hidden md:hidden sm:hidden block mt-3 px-2'>
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3 "
                        fill
                    >

                        <Tab eventKey="home" title={<div><div className=' flex justify-center'><img src={require('../img/general-icon.png')} className='w-[30px] h-[30px]' alt="" /></div><p className='text-black'>Genral</p> </div>}>

                        </Tab>
                        <Tab eventKey="profile" title={<div><div className=' flex justify-center'><img src={require('../img/sport-icon.png')} className='w-[30px] h-[30px]' alt="" /></div><p className='text-black'>Sports</p> </div>}>

                        </Tab>
                        <Tab eventKey="longer-tab" title={<div><div className=' flex justify-center'><img src={require('../img/lifestyle-icon.png')} className='w-[30px] h-[30px]' alt="" /></div><p className='text-black'>Life style</p> </div>}>

                        </Tab>

                    </Tabs>


                </div>



                {/*left side*/}

                <div className=' lg:w-[30%] md:w-fit sm:w-fit hidden md:block sm:block lg:block   '>



                    <div className='ml-5 mr-5 font-robo '>
                        <div className='sidDash'>
                            {/*left side profile block*/}
                            <div className='productPageLCatMain lg:flex lg:justify-center md:w-fit sm:w-fit lg:w-full  md:hidden sm:hidden hidden'>
                                <Profile />
                            </div>



                            <div className='productPageLCatMain md:w-fit sm:w-fit lg:w-full getwidthe '>
                                <div className='flex'>
                                    <div className='mt-[20px] mb-[20px]'>
                                        <FaNewspaper className='lg:ml-3 text-xl lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5' />
                                        {/* <img src={require('../img/general-icon.png')} className='w-[23px] h-[23px] lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5' alt="" /> */}
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>News Filter</h5>
                                </div>
                                <div className='flex'>
                                    <div className=''>
                                        {/* <FaFootballBall className='lg:ml-3 text-xl lg:mr-3  md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' /> */}
                                        <img src={require('../img/general-icon.png')} className='w-[23px] h-[23px] lg:ml-3 lg:mr-3 mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5' alt="" />
                                    </div>

                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >General</p>
                                </div>
                                <div className='flex'>
                                    <div>
                                        {/* <GiVote className='lg:ml-3 lg:mr-3 text-xl  md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' /> */}
                                        <img src={require('../img/sport-icon.png')} className='w-[23px] h-[23px] lg:ml-3 lg:mr-3 lg:mt-1 md:mt-3 sm:mt-3 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5' alt="" />
                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Sports</p>
                                </div>
                                <div className='flex'>
                                    <div>
                                        {/* <IoMdFilm className='lg:ml-3 lg:mr-3 text-xl  md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mt-1 text-gray-500 mb-[20px]' /> */}
                                        <img src={require('../img/lifestyle-icon.png')} className='w-[23px] h-[23px] lg:ml-3 lg:mr-3 lg:mt-1 md:mt-3 sm:mt-3 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5' alt="" />
                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block ' >Life style</p>
                                </div>
                            </div>


                            <div className={`productPageLCatMain  sidebar `} style={{ width: chatWidth }} >
                                <div className='flex'>
                                    <div className='mt-[20px]'>
                                        <AiFillCaretUp className='lg:ml-3 lg:mr-3 text-xl mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5  mb-[20px]' />
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>Sort by</h5>

                                </div>

                                <div className='flex'>
                                    <div>
                                        <FaClock className='lg:ml-3 lg:mr-3 mt-1 text-xl md:ml-5 md:mr-5 sm:ml-5 sm:mr-5  text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Time</p>

                                </div>

                                <div className='flex'>
                                    <div>
                                        <FiTrendingUp className='lg:ml-3 lg:mr-3 text-xl mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5  text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block' >Trending</p>

                                </div>
                                <div className='flex'>
                                    <div>
                                        <BiSortAZ className='lg:ml-3 lg:mr-3 mt-1 text-xl md:ml-5 md:mr-5 sm:ml-5 sm:mr-5  text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden text-xl md:hidden lg:block' >Alphabeticaly</p>
                                </div>
                                <div className='flex'>
                                    <div className='mt-[20px]'>
                                        <FaInfoCircle className='lg:ml-3 lg:mr-3 mt-1 text-2l md:ml-5 md:mr-5 sm:ml-5 sm:mr-5 mb-3' />
                                    </div>
                                    <h5 className='productPageLCatHeading sm:hidden md:hidden lg:block'>About</h5>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <FaInfoCircle className='lg:ml-3 lg:mr-3 text-xl mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5  text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden text-2xl md:hidden lg:block'>About Us</p>

                                </div>
                                <div className='flex'>

                                    <div>
                                        <FaSignOutAlt className='lg:ml-3 lg:mr-3 text-xl mt-1 md:ml-5 md:mr-5 sm:ml-5 sm:mr-5  text-gray-500 mb-[20px]' />

                                    </div>
                                    <p className='productPageLCatMenu sm:hidden md:hidden lg:block'>LogOut</p>
                                </div>
                            </div>

                        </div>

                    </div>

             


                </div>

                {/*center*/}
                <div className='lg:w-2/5 md:w-9/12 sm:w-9/12 w-full  mt-[5px] lg-mb-0 md:mb-0 sm:mb-0 mb-5'>
                    <div className='flex justify-end  '>
                        <div className='p-1 cursor-pointer' onClick={() => setGrid(false)}>
                            {grid === true ?
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#949494" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4Z" fill="#949494"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 16C23 14.3431 21.6569 13 20 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16ZM21 16C21 15.4477 20.5523 15 20 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V16Z" fill="#949494"></path> </g></svg>
                                : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V8C1 9.65685 2.34315 11 4 11H20C21.6569 11 23 9.65685 23 8V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 16C23 14.3431 21.6569 13 20 13H4C2.34315 13 1 14.3431 1 16V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V16ZM21 16C21 15.4477 20.5523 15 20 15H4C3.44772 15 3 15.4477 3 16V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V16Z" fill="#000000"></path> </g></svg>
                            }
                        </div>
                        <div className='p-1 cursor-pointer' onClick={() => setGrid(true)}>
                            {grid === false ?
                                <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#6b6b6b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"><path d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Z" fill="#7a7a7a" fill-opacity=".16" stroke="#7a7a7a" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M19.4 3h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3ZM8.4 14H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Z" fill="#ffffff" stroke="#7a7a7a" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M19.4 14h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z" fill="#7a7a7a" fill-opacity=".16" stroke="#7a7a7a" stroke-width="1.5" stroke-miterlimit="10"></path></g></svg>
                                : <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#6b6b6b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"><path d="M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Z" fill="#000000" fill-opacity=".16" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M19.4 3h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3ZM8.4 14H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Z" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M19.4 14h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z" fill="#000000" fill-opacity=".16" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"></path></g></svg>
                            }
                        </div>
                    </div>


                    <div className=' w-full flex justify-center '>
                        <div >



                            {grid === false ?
                                <div>
                                    {
                                        limitedData.map((data) => {
                                            return <Card data={data} />

                                        })
                                    }
                                </div>
                                :

                                <div className='grid grid-cols-2  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3    w-full '>
                                    {limitedData.map(function (data, i) {

                                        return <GridS data={data} />
                                    })
                                    }
                                </div>

                            }
                        </div>

                    </div>

                </div>

                {/*Right side*/}

                <div className='w-[30%] lg:block md:hidden sm:hidden hidden font-robo'>




                    <div className='ml-5 mr-5'>
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
