import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choode from a doversse menu featurning </p>
        <div className="explore-menu-list">
            {menu_list.map(()=>{
                return (
                    <div className='explore-menu-list-item'>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu
