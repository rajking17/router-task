import React from 'react'
import fsd1 from "../assets/img/fsd-1.webp"
import fsd2 from "../assets/img/fsd-2.webp"
import ds1 from "../assets/img/ds-1.webp"
import ds2 from "../assets/img/ds-2.webp"
import ds3 from "../assets/img/ds-3.webp"
import cb1 from "../assets/img/cb-1.webp"
import cb2 from "../assets/img/cb-2.webp"
import car1 from "../assets/img/career-1.jpg"
import car2 from "../assets/img/career-2.webp"
import car3 from "../assets/img/career-3.webp"

function AllCards() {
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
        },
        {
          image: cb1,
          title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
          description: 'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
          date: '4 December 2023'
        },
        {
          image: cb2,
          title: 'What Is Hacking? Types of Hacking & More',
          description: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
          date: '25 September 2023'
        },
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
        },
    
      ]
  return (
    <>
        {
            data.map((e, i) => {
                return <>
                <div className='card-item' key={i}>
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

export default AllCards