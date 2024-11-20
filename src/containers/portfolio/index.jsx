import React from 'react'
import { MdWorkHistory } from "react-icons/md";
import PageHeaderContent from '../../pageHeaderContent'

import { useState } from 'react'
import imageOne from '../../images/Social Media website.png'
import imageTwo from '../../images/Food Delivery website.png'
import imageThree from '../../images/my portfolio.png'
import imageFour from '../../images/moviesite.png'
import imageFve from '../../images/habit tracker.png'
import './styles.scss'

const portfolioData = [
  {
    id: 2,
    name: "Food Delivery",
    image: imageTwo,
    link:"https://foodorderdelivery-website.netlify.app/"
  },
  {
    id: 2,
    name: "Social Media",
    image: imageOne,
    link:"https://onlinesocialmediawebsite.netlify.app/"
  },
  
  {
    id: 2,
    name: " Portfolio",
    image: imageThree,
    link:"https://myportfoliowebsite-5ojt.onrender.com"
  },

 {
    id: 2,
    name: " Movie website",
    image: imageFour,
    link:"https://topmoviesrecommendation.onrender.com"
  }
  {
    id: 2,
    name: " To-do  List",
    image: imageFive,
    link:"https://todo-list-zwaa.onrender.com"
  }
  
   


]
const filterData = [
  {
    filterId: 1,
    label: "All"
  },
  {
    filterId: 2,
    label: "Development"
  },
  {
    filterId: 3,
    label: "Design"
  },
]

const Portfolio = () => {

  const [filteredValue, setFilteredValue] = useState(1)

  const [hoveredValue, setOveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId)
  };

  function handleHOver(index) {
    setOveredValue(index)
  }

  console.log(filteredValue)
  console.log("hovered value:", hoveredValue)
  const filteredItems = filteredValue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredValue);
  console.log(filteredItems)
  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent headerText=" Portfolio"

        icon={<MdWorkHistory size={40} />}
      />





      <div className='portofolio__content'>

        <ul className='portfolio__content__filter'>
          {
            filterData.map((item) => (

              <li onClick={() => handleFilter(item.filterId)} key={item.filterId} className={item.filterId === filteredValue ? 'active' : ''}>{item.label}</li>
            ))
          }
        </ul>
        <div className='portfolio__content__cards'>
          {
            filteredItems.map((item,index) => (

              <div className='portfolio__content__cards__item' key={item.name.trim()}

                onMouseEnter={() => handleHOver(index)}
                onMouseLeave={() => handleHOver(null)}
              >
                <div className='portfolio__content__cards__item__img-wrapper'>
                  <a href='/'>
                    <img src={item.image} alt="dummydata" />
                  </a>
                </div>
                <div className='overlay'>
                  {
                    index=== hoveredValue &&(
                      <div>
                        <p>{item.name}</p>
                        <button onClick={() => window.open(item.link, '_blank')}>Visit</button>
                      </div>
                    )
                  }

                </div>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Portfolio
