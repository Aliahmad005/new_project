import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <img src={require('../img/news.png')} className='w-[50px] h-[50px]' alt="" />
      <img src={require('../img/profile.png')} className=' sm:h-[50px] w-[50px] h-[50px]' alt="" />
      
    </div>
  );
}

export default Header;
