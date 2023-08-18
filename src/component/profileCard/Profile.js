import React from 'react'
import { Image } from 'react-bootstrap'

function Profile() {
  return (
    <div className=''>
    
<div className="rounded-3xl overflow-hidden   max-w-xs pt-[20px] ">
 
    <div className="flex justify-center ">
        <Image src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 " />		
    </div>
	<div className="text-center px-3 pb-6 pt-2">
		<h3 className=" text-sm bold font-robo">Olivia Dunham</h3>
		<p className="mt-2 font-robo font-light ">Hello, i'm from another the other side!</p>
	</div>
  	<div className="flex justify-center pb-3 ">
      <div className="text-center mr-3 border-r pr-3">
        <h2>34</h2>
        <span>Photos</span>
      </div>
      <div className="text-center">
        <h2>42</h2>
        <span>Friends</span>
      </div>
  	</div>
</div>
    </div>
  )
}

export default Profile
