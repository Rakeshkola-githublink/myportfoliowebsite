import React from 'react'
import { BsFillPersonVcardFill } from "react-icons/bs";
import PageHeaderContent from '../../pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDatabase, FaDev } from 'react-icons/fa'

const personaldetails = [
  {
    label: "Name:",
    value: "Rakesh Kola"
  },
  {
    label: "Age:",
    value: "24"

  },
  {
    label: "Email Address:",
    value: "kolarakesh21@gmail.com"

  },
  {
    label: "Contact No:",
    value: "+91 8106927216"

  },
  


]
const jobSummary = "Frontend developer with 1.3 years of experience at ITSS, specializing in React.js. Currently seeking new opportunities as a React.js developer. For detailed insights into my work experience, please navigate to the portfolio section."


const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText=" About Me"

        icon={<BsFillPersonVcardFill size={40} />}
      />
      <div className='about__content'>



        <div className="about__content__personalWrapper">

          <Animate play duration={1.5}

            delay={1}

            start={{ transform: "translateX(-900px" }}
            end={{ transform: "translateX(0px" }}
          >

            <h3>Front end Developer</h3>
            <p>{jobSummary}</p>

          </Animate>
          <Animate play duration={1.5}

            delay={1}

            start={{ transform: "translateX(500px" }}
            end={{ transform: "translateX(0px" }}

          >

            <h3 className='personalInformationText'>Personal Information</h3>
            <ul>
              {
                personaldetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span>


                  </li>

                ))

              }
            </ul>
          </Animate>


        </div>

        <div className='about__content__servicesWrapper'>
          
       
          <Animate play duration={1.5}

            delay={1}

            start={{ transform: "translateX(600px" }}
            end={{ transform: "translateX(0px" }}

          >

          <div className='about__content__servicesWrapper__innerContent'>
            <div>
              <FaDev color="var( --yellow-theme-main-color)" size={60} />
            </div>
            <div>
              <DiAndroid color="var( --yellow-theme-main-color)" size={60} />
            </div>
            <div>
              <FaDatabase color="var( --yellow-theme-main-color)" size={60} />
            </div>
            <div>
              <DiApple color="var( --yellow-theme-main-color)" size={60} />
            </div>
          </div>
          </Animate>
        </div>
      </div>

    </section>
  )
}

export default About 