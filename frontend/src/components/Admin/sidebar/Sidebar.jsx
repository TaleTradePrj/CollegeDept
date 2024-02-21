import React, { useState } from 'react'
import SideLogo from '../SideLogo'
import CategoryDash from './CategoryDash'
import SideOption from './SideOption'

export default function Sidebar(props) {
  
  const pageFunc = props.pageFunc
  const activePage = props.activePage
  return (
    <div className='flex flex-col w-1/10 md:w-1/10 lg:w-1/6 h-full border-e border-gray-800 bg-[#1F2544] p-5 '>
        <div className="mb-7">
            <SideLogo/>
        </div>
        <SideOption activePage={activePage} name="Dashboard" option="dashboard" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Teachers" option="teachers" pageFunc={pageFunc}/>
        <SideOption activePage={activePage} name="Queries" option="queries" pageFunc={pageFunc}/>
    </div>
  )
}