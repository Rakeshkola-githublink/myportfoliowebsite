import React from 'react'
import { MdWorkHistory } from "react-icons/md";
import PageHeaderContent from '../../pageHeaderContent'

import { useState } from 'react'
import imageOne from '../../images/ecommerce.jpg'
import imageTwo from '../../images/webdevelopment.jpg'
import imageThree from '../../images/socialmedia.jpg'
import './styles.scss'

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: imageOne
  },
  {
    id: 2,
    name: "Web Development",
    image: imageTwo
  },
  {
    id: 2,
    name: "Social media",
    image: imageThree
  },

  {
    id: 3,
    name: "Social Media",
    image: imageTwo


  },
  {
    id: 3,
    name: "Design",
    image: imageOne


  },


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
                        <button>Visit</button>
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