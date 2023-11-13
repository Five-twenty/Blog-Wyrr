import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className="w-[100%] h-[981px] px-[120px] pt-[66px] pb-[24.33px] bg-gray-900 flex-col justify-end items-center gap-12 inline-flex">
    <div className="flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-[1200px] h-[426.67px] relative rounded-[18px]">
            <div className="w-[1200px] h-[426.67px] left-0 top-0 absolute rounded-lg bg-lime-300"></div>
            <div className="left-[91px] top-[125px] absolute flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-[673px] text-gray-900 text-[50.40px] font-bold font-['Archivo Expanded'] leading-[50.40px]">Start sending money to friends and family.</div>
                <div className="justify-start items-start gap-4 inline-flex">
                    <div className="w-[165px] h-[57px] relative bg-lime-300">
                        <div className="w-[165px] h-[57px] left-0 top-0 absolute rounded-[9px] border border-black"></div>
                        <div className="left-[21px] top-[12px] absolute justify-center border border-red-400 items-center gap-2 inline-flex">
                            <img className="w-8 h-8 relative" src='/appl.svg'/>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-gray-900 text-[10px] font-normal font-['Inter']">Download on the</div>
                                <div className="text-gray-900 text-[17px] font-semibold font-['Inter']">App Store</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[165px] h-[57px] relative bg-lime-300">
                        <div className="w-[165px] h-[57px] left-0 top-0 absolute rounded-[9px] border border-black"></div>
                        <div className="left-[21px] top-[12px] absolute justify-start items-center gap-2 inline-flex">
                            <img className="w-8 h-8 relative" src='/google.svg'/>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-gray-900 text-[10px] font-normal font-['Inter']">Get it on</div>
                                <div className="text-gray-900 text-[17px] font-semibold font-['Inter']">Play Store</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="self-stretch justify-start items-start gap-20 inline-flex">
            <div className="w-[198px] flex-col justify-start items-start gap-8 inline-flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="w-[200px] h-[56.18px] justify-center items-center inline-flex">
                        <div className="w-[200px] h-[56.18px] relative">
                            <div className="w-[129.78px] h-[42.13px] justify-start items-start">
                              <img className='/' src='/Grid.svg'/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[200px] text-white text-xl font-normal font-['Roboto'] leading-relaxed">18 King Str ESuite 1400          Toronto, ON          M5C 1C4</div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <img className="w-6 h-6 relative" src='/Xtwi.svg'/>
                        <img className="w-6 h-6 relative" src='/lin.svg'/>
                        <img className="w-6 h-6 relative" src='/facebook.svg'/>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-medium font-['Roboto'] leading-relaxed">Company</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">About us</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Press</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Career</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Partnership</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-medium font-['Roboto'] leading-relaxed">Products</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Wyrr App</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Wyrr PMT</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-medium font-['Roboto'] leading-relaxed">Resources</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Help Center</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">FAQ</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Blog</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Events</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">How to Use</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Give to a cause</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Currency Page</div>
                </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="text-white text-xl font-medium font-['Roboto'] leading-relaxed">Legal</div>
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Terms of Service</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Privacy Policy</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Consumer Protection Policy</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">Modern Slavery Statement</div>
                    <div className="text-white text-xl font-normal font-['Roboto'] leading-relaxed">AML & Anti-Terrorist Financing Policy</div>
                </div>
            </div>
        </div>
    </div>
    <div className="opacity-80 flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-[530px] text-center text-stone-300 text-xs font-normal font-['Roboto'] leading-none tracking-tight">Wyrr Inc., Canada, is registered and regulated by Canada’s Financial Transactions and Report Analysis Centre as a Money Service Business. MSB registration number: M22637380</div>
        <div className="self-stretch text-center text-stone-300 text-xs font-normal font-['Roboto'] leading-none tracking-tight">Copyright © Wyrr Inc. 2023. All rights reserved.</div>
    </div>
</section>
  )
}

export default Footer