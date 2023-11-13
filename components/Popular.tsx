import React from 'react'

const Popular = () => {
  return (
    <section className="w-[100%] h-[342px] flex-col gap-6 flex">
    <div className="text-gray-900 text-[42px] ml-[160px] font-bold font-['Archivo Expanded'] leading-[42px]">Popular</div>
    <div className="justify-center items-start gap-6 inline-flex">
        <div className="pl-[30px] pr-[78px] pt-[81px] pb-[26px] bg-orange-100 rounded-2xl border border-neutral-300 border-opacity-20 justify-start items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-medium font-['Roboto'] leading-[40.80px]">Product</div>
                    <div className="w-[271px] text-zinc-700 text-xs font-normal font-['Roboto'] leading-none tracking-tight">In-depth articles about Wyrr's products and features, such as how to send money to Nigeria...</div>
                </div>
                <div className="w-[277px] h-14 px-4 py-6 rounded-2xl border border-neutral-900 justify-center items-center gap-2 inline-flex">
                    <div className="text-gray-900 text-[17px] font-medium font-['Roboto'] leading-snug">Explore</div>
                </div>
            </div>
        </div>
        <div className="pl-[30px] pr-[59px] pt-[81px] pb-[26px] bg-indigo-100 rounded-2xl border border-neutral-300 border-opacity-20 justify-start items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-medium font-['Roboto'] leading-[40.80px]">Overseas</div>
                    <div className="w-[295px] text-gray-900 text-xs font-normal font-['Roboto'] leading-none tracking-tight">In-depth articles about Wyrr's products and features, such as how to send money to Nigeria...</div>
                </div>
                <div className="w-[277px] h-14 px-4 py-6 rounded-2xl border border-gray-900 justify-center items-center gap-2 inline-flex">
                    <div className="text-gray-900 text-[17px] font-medium font-['Roboto'] leading-snug">Explore</div>
                </div>
            </div>
        </div>
        <div className="pl-[30px] pr-[60px] pt-[81px] pb-[26px] bg-lime-50 rounded-2xl border border-neutral-300 border-opacity-20 justify-start items-center flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-gray-900 text-2xl font-medium font-['Roboto'] leading-[40.80px]">Travel</div>
                    <div className="w-[295px] text-zinc-700 text-xs font-normal font-['Roboto'] leading-none tracking-tight">Tips and advice for Canadians planning to move to Nigeria, such as how to get a visa</div>
                </div>
                <div className="w-[277px] h-14 px-4 py-6 rounded-2xl border border-neutral-900 justify-center items-center gap-2 inline-flex">
                    <div className="text-gray-900 text-[17px] font-medium font-['Roboto'] leading-snug">Explore</div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Popular