import React, { useEffect, useState , useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Test() {
  const [chatWidth, setChatWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined); 
  const [sidebar, setSidebar] = useState(''); 

  const windowWidth = useRef(window.innerWidth)

  console.log('widthe', sidebar)



 

  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    setSidebar(window.innerWidth)
}

    window.addEventListener('resize', handleResize)
  })
 




  useEffect(() => {
    const chatEl = document.querySelector('.sidebar').getBoundingClientRect();
    setChatWidth(chatEl.width);
    setSidebarTop(chatEl.top);
  }, []);

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
    <div>
      <h3>
        Sticky element on a scroll 
        <a
          href="https://www.cluemediator.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Clue Mediator
        </a>
      </h3>
      <div className="row">
        <div className="col-8">
          {[...Array(20)].map((a, i) => (
            <div key={i} className="item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          ))}
        </div>
        <div className="col-4">
        <div className="">
          <div className="" >
            <h3>Sidebar</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
          <div className="sidebar" style={{ width: chatWidth }}>
            <h3>Sidebar</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}
