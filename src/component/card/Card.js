import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import moment from 'moment';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Card = (props) => {
  const [sliderRef] = useKeenSlider()
  const [expanded, setExpanded] = useState(false);
  const content = expanded ? props.data.content : props.data.content.slice(0, 50);
  const timeAgo = moment(props.data.date_created).fromNow();




  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const ml = 1

  return (
    <div>




      <div class=" pb-4 pt-2 px-2">
        <div class="bg-white border rounded-lg max-w-[500px]">
          <div class="flex items-center px-4 py-3">
            <img class="h-8 w-8 rounded-full" src={props.data.image} />
            <div class="ml-3 ">
              <div className='flex'>
                <span class="text-sm font-semibold antialiased block leading-tight">{props.data.company} </span>
                <span class="text-sm font-semibold antialiased ml-2 text-gray-500 block leading-tight"> {timeAgo}</span>
              </div>
            </div>
          </div>
          <div className=' px-3 font-robo mb-1 font-semibold'>{props.data.title}</div>
          <div>
            <div className='text-gray-500 px-3 text-base '>{content}</div>
            {props.data.content.length > 50 && (
              <button className='text-xs text-blue-600 mb-3 px-3' onClick={toggleExpand}>
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}
          </div>
          <div >

            <Carousel data-bs-theme="dark" controls={false}  >
              {props.data.images.map(function (data) {
                return <Carousel.Item>
                  <img
                    className=" w-100"
                    src={data}
                    alt="First slide"
                  />

                </Carousel.Item>
              })

              }
            </Carousel>





          </div>
          <div class="flex items-center justify-between mx-4 mt-3 mb-2">
            <div class="flex gap-5">
              <svg viewBox="0 0 24.00 24.00" height="30" width="30" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#666666" stroke-width="1.272"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.08884 11.2945C5.26942 11.7216 5.69482 12 6.16669 12H9V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V12H17.8333C18.3052 12 18.7306 11.7216 18.9112 11.2945C19.0917 10.8674 18.9919 10.3759 18.6583 10.049L12.825 4.33474C12.3693 3.88842 11.6307 3.88842 11.175 4.33474L5.34174 10.049C5.00808 10.3759 4.90826 10.8674 5.08884 11.2945Z" fill="#696969"></path> </g></svg>
              <svg className='hidden' viewBox="0 0 24.00 24.00" height="30" width="30" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#000000" stroke-width="1.272"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.08884 11.2945C5.26942 11.7216 5.69482 12 6.16669 12H9V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V12H17.8333C18.3052 12 18.7306 11.7216 18.9112 11.2945C19.0917 10.8674 18.9919 10.3759 18.6583 10.049L12.825 4.33474C12.3693 3.88842 11.6307 3.88842 11.175 4.33474L5.34174 10.049C5.00808 10.3759 4.90826 10.8674 5.08884 11.2945Z" fill="#ffffff"></path> </g></svg>
              <svg viewBox="0 0 24.00 24.00" className='hidden' height="30" width="30" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="#666666" stroke-width="1.272"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.08884 11.2945C5.26942 11.7216 5.69482 12 6.16669 12H9V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V12H17.8333C18.3052 12 18.7306 11.7216 18.9112 11.2945C19.0917 10.8674 18.9919 10.3759 18.6583 10.049L12.825 4.33474C12.3693 3.88842 11.6307 3.88842 11.175 4.33474L5.34174 10.049C5.00808 10.3759 4.90826 10.8674 5.08884 11.2945Z" fill="#696969"></path> </g></svg>
              <svg viewBox="0 0 24.00 24.00" height="30" width="30" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="#000000" stroke-width="1.272"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.08884 11.2945C5.26942 11.7216 5.69482 12 6.16669 12H9V19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19V12H17.8333C18.3052 12 18.7306 11.7216 18.9112 11.2945C19.0917 10.8674 18.9919 10.3759 18.6583 10.049L12.825 4.33474C12.3693 3.88842 11.6307 3.88842 11.175 4.33474L5.34174 10.049C5.00808 10.3759 4.90826 10.8674 5.08884 11.2945Z" fill="#ffffff"></path> </g></svg>
              <svg viewBox="0 0 24 24" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.488"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.0678 2.14611C12.3883 2.00663 12.7431 1.96564 13.0874 2.02906C13.4316 2.09244 13.7478 2.25698 13.9973 2.49935L22.459 10.7164C22.6312 10.8837 22.7672 11.0838 22.8599 11.3041C22.9525 11.5244 23 11.7609 23 11.9994C23 12.238 22.9525 12.4744 22.8599 12.6947C22.7672 12.9151 22.6309 13.1154 22.4587 13.2827L13.9972 21.4997C13.7476 21.742 13.4316 21.9064 13.0874 21.9698C12.7431 22.0332 12.3883 21.9922 12.0678 21.8528C11.7474 21.7134 11.4771 21.4826 11.2883 21.1916C11.0997 20.9008 11.0001 20.5617 11 20.2164L11 17.0208C8.70545 17.1206 7.26436 17.5717 6.17555 18.2297C4.90572 18.9971 4.01283 20.0973 2.77837 21.6278C2.5122 21.9578 2.06688 22.0841 1.66711 21.943C1.26733 21.8018 1 21.424 1 21C1 17.4414 1.5013 13.9586 3.15451 11.341C4.72577 8.85318 7.25861 7.26795 11 7.03095L11 3.78241C11.0001 3.43711 11.0997 3.09808 11.2883 2.80727C11.4771 2.51629 11.7474 2.2855 12.0678 2.14611Z" fill="#ffffff"></path> </g></svg>
              {/* <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> */}
              {/* <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg> */}
              {/* <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg> */}
            </div>
            <div class="flex">
              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
            </div>
          </div>
          <div class="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
