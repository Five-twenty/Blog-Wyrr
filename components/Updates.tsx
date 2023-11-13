import Link from 'next/link'
import React from 'react'

const Updates = () => {
  return (
    <section className="w-[100%] h-[558px] pl-[120px] pr-[118px] py-[135px]  justify-center items-center inline-flex">
       <div className="w-[1202px] h-72 relative flex-col justify-start items-start inline-flex">
    
    <div className="flex-col justify-start items-start gap-8 inline-flex">
        <div className="w-[553px] text-gray-900 text-[42px] font-bold font-['Archivo Expanded'] leading-[42px]">Want updates straight to your inbox?</div>
        <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-zinc-700 text-xl font-normal font-['Roboto'] leading-relaxed">Enter your email to get the latest news from the Wyrr</div>
            <div className="w-[718px] justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 self-stretch p-4 bg-white rounded-2xl border border-zinc-100 justify-start items-center gap-1 flex">
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-stone-300 text-[17px] font-normal font-['Roboto'] leading-snug">Email address</div>
                    </div>
                </div>
                <Link href="/">
                  <div className="w-[200px] self-stretch px-4 py-6 bg-gray-900 rounded-2xl justify-center items-center gap-2 flex">
                    <div className="text-lime-300 text-[17px] font-medium font-['Roboto'] leading-snug">Subscribe</div>
                  </div>
                </Link>
                
            </div>
        </div>
        
    </div>
  </div>
     <img className="w-[447px] h-72" src="/envelope.png" />
   </section>
  )
}

export default Updates