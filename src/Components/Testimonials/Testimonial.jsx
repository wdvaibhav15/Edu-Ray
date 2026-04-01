import React,{ useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'



const Testimonial = () => {
    const slider= useRef();
    let tx=0;


    const slideForword = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackword = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonial'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForword}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackword}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                   <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>Emily Johnson</h3>
                            <span>Computer Science</span>
                        </div>
                    </div>
                    <p>Choosing to persue my degree at Edu-Ray was one of the best decision I've ever made. The supportive community , states-of-the-art facilities, and commitment to academic excellence have truly exceeded my expextations.</p>
                   </div>
                </li>
                <li>
                   <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>John Doe</h3>
                            <span>UI/UX Designer</span>
                        </div>
                    </div>
                    <p>This college has completely transformed my learning experience. The faculty members are highly supportive, and the campus environment motivates students to grow academically and personally.</p>
                   </div>
                </li>
                <li>
                   <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Sophia Williams </h3>
                            <span>Information Technologyr</span>
                        </div>
                    </div>
                    <p>The practical learning approach and modern facilities helped me build confidence in my skills. I am grateful for the guidance and opportunities provided by the college.</p>
                   </div>
                </li>
                <li>
                   <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>Michael Brown</h3>
                            <span>Business Administration</span>
                        </div>
                    </div>
                    <p>Studying here has been one of the best decisions of my life. The teachers are experienced, and the placement support has been excellent for career growth.</p>
                   </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonial
