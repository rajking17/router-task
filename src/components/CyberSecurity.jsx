import React from 'react'
import cb1 from "../assets/img/cb-1.webp"
import cb2 from "../assets/img/cb-2.webp"

function CyberSecurity() {
    let data = [
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

export default CyberSecurity