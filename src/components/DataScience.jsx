import React from 'react'
import ds1 from "../assets/img/ds-1.webp"
import ds2 from "../assets/img/ds-2.webp"
import ds3 from "../assets/img/ds-3.webp"

function DataScience() {
    let data = [
        {
          image: ds1,
          title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
          description: 'Are you someone who’s not interested in coding, but wants to get placed in tech',
          date: '28 November 2023'
        },
        {
          image: ds2,
          title: 'Top Product-Based Companies for Data Science Freshers',
          description: 'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
          date: '10 November 2023'
        },
        {
          image: ds3,
          title: 'What is the Difference between Data Science and Data Engineering?',
          description: 'India has been making some serious waves in the world of data. Just like the',
          date: '8 November 2023'
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

export default DataScience