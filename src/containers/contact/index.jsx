import React, { useRef } from 'react';
import { MdContactMail } from 'react-icons/md';
import PageHeaderContent from '../../pageHeaderContent';
import emailjs from '@emailjs/browser';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_7xlo37g', 'template_wyh8vql', formRef.current, {
        publicKey: 'pHh4yD5GOD7AL-0mf',
      })
      .then(
        (result) => {
          toast.success('Email Sent Successfully');
          console.log(result.text);
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          toast.error('Failed to send email');
        }
      );
  
    e.target.reset();
  };
  
  return (
    <section id='contact' className='contact'>
       <ToastContainer />
      <PageHeaderContent headerText='My Contact' icon={<MdContactMail size={40} />} />
      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <div className='contact__content__form'>
            <div className='contact__content__form__controlswrapper'>
              <form ref={formRef} onSubmit={sendEmail}>
                <div>
                <input required name='user_name' className='inputName' type='text'  />
                <label htmlFor="user_" className='nameLabel'>Name</label>
                </div>
                <div>
                <input required name='user_email' className='inputEmail' type='email'  />
                <label htmlFor="user_email" className='emailLabel'>Email</label>
                </div>
               <div>

               <textarea rows={5} required name='message' className='inputDescription'></textarea>
               <label htmlFor="message" className='descriptionLabel'>Description</label>
               </div>
               
                <button type='submit'>Submit</button>
                </form>
            </div>
            
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;


