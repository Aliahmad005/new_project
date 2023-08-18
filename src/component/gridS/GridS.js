import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import moment from 'moment';


const GridS = (props) => {
    const [expanded, setExpanded] = useState(false);
    const content = expanded ? props.data.content : props.data.content.slice(0, 50);
    const timeAgo = moment(props.data.date_created).fromNow();


    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>




            <div class=" p-1">
                <div class="bg-white border rounded-sm max-w-md">
                    <div >

                        <Carousel data-bs-theme="dark" interval={null}>
                            {props.data.images.map(function (data) {
                                return <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={data}
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                            })

                            }
                        </Carousel>


                    </div>
                    <div class="flex items-center px-2 py-3">
                        <img class="h-8 w-8 rounded-full" src={props.data.image} />
                        <div class="ml-3 ">
                            <div className='flex'>
                                <span class="text-xs font-semibold antialiased block leading-tight">{props.data.title} </span>

                            </div>
                        </div>
                    </div>
                    {/* <div className='text-gray-500 px-3 text-xs mb-3'>{props.data.content}</div> */}



                </div>
            </div>
        </div>
    );
}

export default GridS;
