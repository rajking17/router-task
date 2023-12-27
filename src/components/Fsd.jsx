import React from 'react'
import fsd1 from "../assets/img/fsd-1.webp"
import fsd2 from "../assets/img/fsd-2.webp"

function Fsd() {
    let data = [
        {
          image: fsd1,
          title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
          description: 'When you’re hiring a full-stack developer, what are the most important things you look for?',
          date: '15 November 2023'
        },
        {
          image: fsd2,
          title: 'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
          description: 'When you’re hiring a full-stack developer, what are the most important things you look for?',
          date: '15 November 2023'
        },
    
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

export default Fsd