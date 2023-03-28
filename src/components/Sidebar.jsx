import React from 'react'
import { navbarapi } from '../data/data'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='h-screen min-w-[36.6vb] ml-4 pt-3 border-r-[1px] border-[#262626] sticky left-0 top-0'>
        <div className='ml-1'>
            <img className='w-[110px] h-[85px]' src="/name.png" alt="instaName/logo" />
        </div>
        <div >
            {navbarapi.map((item,index)=>(
                <Link key={item.id} to={item.link} className={`w-[34vb] flex items-center gap-4 cursor-pointer rounded-full hover:bg-[#262626] px-1.5 py-2 group  ${ index === 0 ? 'mt-2 font-bold':'mt-3'} `}>
                    <div className='text-white text-[28px]' >{item.icon}</div>
                    <div className='text-white group-focus:font-bold block roboto'>{item.title}</div>
                </Link>
               
            ))}
        </div>
    </div>
  )
}

export default Sidebar