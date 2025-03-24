
// Import React and required libraries
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './AboutPage.css'; // Assuming you'll use CSS for styling

// AboutPage Component
const AboutPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false });
  }, []);

    return (
      <body className=' bg-black min-h-screen '>
           <div class="flex justify-center items-center" data-aos="fade-down">
                 <img src="https://i.pinimg.com/originals/f3/21/97/f32197f072587bc2bb08a879839fabec.gif" alt="Gamer" class="rounded-lg shadow-lg object-cover w-80 h-auto items-center"/>
           </div>

        <div className="about-container" >
            <header className="about-header" data-aos="fade-up">
                <h1 className='font-extrabold text-teal-400'>About Us</h1>
                <p className='font-bold text-stone-400'>Your journey, our passion.</p>  
            </header>

            <section className="about-content p-5">
                <div className="about-card bg-blue-400" data-aos="zoom-in">
                    <h2 className='font-bold'>Who We Are</h2>
                    <p>
                        We are a team of innovators and dreamers committed to crafting extraordinary experiences. Our mission is to redefine possibilities and inspire through creativity and technology.
                    </p>
                </div>
                
                <div className="about-card bg-teal-400" data-aos="zoom-in">
                    <h2 className='font-bold'>Our Vision</h2>      
                    <p>
                        To become the global leader in innovation-driven solutions, empowering communities and businesses to thrive in an ever-evolving world.
                    </p>
                </div>

                <div className="about-card bg-pink-400" data-aos="zoom-in">
                    <h2 className='font-bold'>Our Values</h2> 
                    <ul>
                        <li>Innovation: We challenge the status quo.</li>
                        <li>Integrity: We uphold honesty and transparency.</li>
                        <li>Collaboration: Together, we achieve more.</li>
                        <li>Sustainability: Building a better future for everyone.</li>
                    </ul>
                </div>
            </section>

            <footer className="about-footer" data-aos="fade-down">
                <h3 className='text-teal-500 font-bold'>Let’s Connect!</h3>
                <p>
                    We’d love to hear from you. Whether it’s feedback, questions, or collaboration opportunities, reach out to us anytime.
                </p>

            </footer>
        </div>
      </body>
    );
};

export default AboutPage;