"use client"
import React from 'react'
import { useState } from 'react'
function PromptInput() {
    const [input,setInput]=useState("");
  return (
    <form className='flex flex-row md:flex-row sm:flex-row shadow-md shadow-slate-400/10 mx-4 border rounded-md  '>
      <textarea className='flex-1 p-4 outline-none rounded-md' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button type='submit' disabled={!input}>Generate</button>
      <button className='p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:bg-gray-400 disabled:cursor-not-allowed' type='button'>Use Suggestion</button>
      <button className='p-4 bg-white text-violet-400 border-none rounded-b-md sm:rounded-r-md sm:rounded-bl-md transition-colors duration-200 font-bold' type='button'>New Suggestion</button>
    </form>
  )
}

export default PromptInput
