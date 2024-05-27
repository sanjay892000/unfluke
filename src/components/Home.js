import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Transition, TransitionGroup } from 'react-transition-group';
import '../style/home.css'

function Home() {
  const unflukeRef = useRef(null);
  const taskRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      unflukeRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      taskRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="homepage-container">
      <TransitionGroup component={null}>
        <Transition nodeRef={unflukeRef} timeout={1000} classNames="fade">
          <div ref={unflukeRef} className="unfluke-task">
            UNFLUKE TASK
          </div>
        </Transition>
      </TransitionGroup>
      <TransitionGroup component={null}>
        <Transition nodeRef={taskRef} timeout={1000} classNames="fade">
          <div ref={taskRef} className="additional-content">
            According to task, we have implemented only <span>Dashboard</span> & <span>Scanner</span>
          </div>
        </Transition>
      </TransitionGroup>
    </div>
  )
}

export default Home
