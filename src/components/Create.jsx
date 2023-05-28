import React from 'react'
import {FaPhotoVideo} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"
import {useDispatch,useSelector} from "react-redux"
import { selectCreateState, setCloseCreate } from '../store/CreateSlice'

const Create = () => {

  const dispatch = useDispatch()
  const ifCreateState = useSelector(selectCreateState);

  const onCreateClick = () =>{
    dispatch(setCloseCreate({
      createState:false,
    }))
  }

  return (
    <div className={`fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 h-screen w-screen text-white duration-200 transition-all ease-linear z-[3] opacity-100 bg-[#02020281] 
    ${ifCreateState ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div className='h-[75vh] w-[30vw] rounded-xl bg-[#262626] '>
        <h1 className='w-full p-[10px] text-center font-semibold border-b-[1px] border-[#ffffff17]'>Create new post</h1>
        <div className='h-full rounded-xl grid place-content-center translate-y-[-20px]'>
          <div className='flex items-center justify-center h-[100px] w-[100px] justify-self-center mb-[10px]'><FaPhotoVideo className='h-full w-full' /></div>
          <p className='text-[20px] leading-tight'>Drag photos and videos here</p>
          <button className='px-[10px] py-[7px] mt-[20px] w-[65%] bg-[#0095f6] justify-self-center font-semibold text-[14px] leading-tight rounded-lg'>Select From Computer</button>
        </div>
      </div>
      <button onClick={onCreateClick} className='absolute top-[20px] right-[30px] z-[4]'><RxCross2 className='text-white h-[25px] w-[25px]' /></button>
    </div>
  )
}

export default Create