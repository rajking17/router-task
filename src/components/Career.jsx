import React from 'react'
import car1 from "../assets/img/career-1.jpg"
import car2 from "../assets/img/career-2.webp"
import car3 from "../assets/img/career-3.webp"

function Career() {
    let data = [
        {
          image: car1,
          title: 'UI/UX Designer Job Description and Roles & Responsibilities',
          description: 'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
          date: '13 December 2023'
        },
        {
          image: car2,
          title: 'Top 5 IT Jobs for Economics Students',
          description: 'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for',
          date: '4 December 2023'
        },
        {
          image: car3,
          title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
          description: 'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
          date: '2 December 2023'
        }
      ]
  return (
    <>
        {
            data.map((e, i) => {
                return <>
                <div className='card-item' id={i+1} key={i}>
                    <div className='card-inner'>
                        <div className='card-head'>
                            <img src={e.image} alt="" />
                        </div>
                        <div className='card-body'>
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>
                        </div>
                        <div className='card-foot'>
                            <span>{e.date}</span>
                        </div>
                    </div>
                </div>
                </>
            })
        }
    </>
  )
}

export default Career