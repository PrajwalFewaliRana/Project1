import React from 'react'
import img from "../assets/PRAJWAL.jpg"
import img2 from "../assets/verify.png"
import {IoIosSettings} from "react-icons/io"
import {BiGrid,BiUserPin} from "react-icons/bi"
import {RxBookmark} from "react-icons/rx"
import {BsCamera} from "react-icons/bs"
import {AiOutlineArrowDown} from  "react-icons/ai"

const Profile = () => {
  return (
    <div className='text-white px-[85px] h-screen w-full pt-[30px] mb-[80px]'>
      <div className='flex gap-[100px] border-b-[1px] border-[#262626] pb-[45px]'>
        <div className='h-[150px] w-[150px] rounded-full ml-[70px]'>
          <img src={img} alt="profile/img" className='h-full w-full rounded-full object-cover' />
        </div>
        <div className='mt-[5px]'>
          <div className='flex items-center gap-[10px]'>
            <p className='leading-tight text-[20px]'>prajwalmagar2021</p>
            <img className='h-6 w-6' src={img2} alt="verify/img" />
            <button className='font-semibold text-black hover:bg-[#dbdbdb] bg-[#ecebeb] py-[7px] text-[14px] leading-tight px-[15px] rounded-lg'>Edit Profile</button>
            <div className='flex items-center justify-center h-7 w-7'><IoIosSettings className='h-full w-full' /></div>
          </div>
          <div className='flex gap-[35px] my-[18px]'>
            <p className='cursor-text leading-tight '> <span className='text-[#f5f5f5] font-semibold'>0</span> posts</p>
            <p className='cursor-pointer leading-tight '> <span className='text-[#f5f5f5] font-semibold'>7M</span> followers</p>
            <p className='cursor-pointer leading-tight '> <span className='text-[#f5f5f5] font-semibold'>50</span> following</p>
          </div>
          <p className='font-semibold text-[14px] leading-tight'>PraJwal MaGar</p>
        </div>
      </div>
      <div className='w-full flex items-center justify-center gap-[75px] text-[12px] leading-tight'>
        <div className='flex items-center gap-[5px] py-[15px] border-t-[1px] border-white tracking-widest cursor-pointer'><BiGrid /> <p>POSTS</p> </div>
        <div className='flex items-center gap-[5px] py-[15px] tracking-widest text-[#a8a8a8] cursor-pointer'><RxBookmark /> <p>SAVED</p> </div>
        <div className='flex items-center gap-[5px] py-[15px] tracking-widest text-[#a8a8a8] cursor-pointer'><BiUserPin /> <p>TAGGED</p> </div>
      </div>
      <div className='w-full h-[52vh] flex flex-col items-center justify-center'>
        <div className='rounded-full h-[60px] w-[60px] flex items-center justify-center border-[2px] border-[#1f1f1f]'>
          <BsCamera className='text-[#1f1f1f] h-8 w-8' />
        </div>
        <h1 className='font-bold text-[30px] leading-[tight] mt-[10px]'>Share photos</h1>
        <p className='text-[14px] leading-tight py-[12px]'>When you share photos, they will appear on your profile.</p>
        <button className='text-[#0095f6] font-semibold text-[14px] leading-tight hover:text-white'>Share your first photo</button>
      </div>
      <div className='text-[#a8a8a8] text-[12px] leading-tight'>
        <div className='flex items-center justify-between '>
          <p className='hover:underline decoration-white cursor-pointer'>Meta</p>
          <p className='hover:underline decoration-white cursor-pointer'>About</p>
          <p className='hover:underline decoration-white cursor-pointer'>Blog</p>
          <p className='cursor-pointer'>Jobs</p>
          <p className='hover:underline decoration-white cursor-pointer'>Help</p>
          <p className='hover:underline decoration-white cursor-pointer'>API</p>
          <p className='cursor-pointer'>Privacy</p>
          <p className='cursor-pointer'>Terms</p>
          <p className='cursor-pointer'>Top accounts</p>
          <p className='cursor-pointer'>Locations</p>
          <p className='cursor-pointer'>Instagram Lite</p>
          <p className='cursor-pointer'>Contact uploading and non-users</p>
          <p className='hover:underline decoration-white cursor-pointer'>Meta Verified</p>
        </div>
        <div className='flex items-center justify-center gap-[20px] my-[20px]'>
          <div className='flex items-center gap-[3px] cursor-pointer'>
            <p >English (UK)</p>
            <AiOutlineArrowDown className='h-4 w-4' />
          </div>
          <div>© 2023 INSTAGRAM FROM META</div>
        </div>
      </div>
    </div>
  )
}

export default Profile