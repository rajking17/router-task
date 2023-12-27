import React from 'react'
import { NavLink  } from 'react-router-dom'

function Tabs() {
  return (
    <div className='tabsWrapper'>
        <ul className='tabList'>
            <li><NavLink  className={({isActive}) => isActive ? "active": "" } to={'/all'}>All</NavLink ></li>
            <li><NavLink  className={({isActive}) => isActive ? "active": "" } to={'/full-stact-development'}>Full Stack Development</NavLink ></li>
            <li><NavLink  className={({isActive}) => isActive ? "active": "" } to={'/data-science'}>Data Science</NavLink ></li>
            <li><NavLink  className={({isActive}) => isActive ? "active": "" } to={'/cyber-security'}>Cyber Security</NavLink ></li>
            <li><NavLink  className={({isActive}) => isActive ? "active": "" } to={'/career'}>Career</NavLink ></li>
        </ul>
    </div>
  )
}

export default Tabs