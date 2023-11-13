import Button from "./Button"

const Hero = () => {
  return (
    <section className="w-[1540px] h-[687px] bg-black bg-opacity-20 " >
      <div className='hero-image w-[758px] h-[358px] flex-col justify-start items-start gap-8 inline-flex p-[150px]'>
         <div className="flex-col justify-start items-start gap-2 flex">
          <p className="w-[758px] text-neutral-50 text-6xl font-bold font-['Archivo Expanded'] leading-[60px]">The Future of Money Transfer and Its <br/> Impact on Economy</p>
          <p className="w-[500px] text-neutral-50 text-2xl font-normal font-['Roboto'] leading-[40.80px]">Discover stories, thinking, solutions, and expertise from writers on payment solutions.</p>
        </div>
        <div className="w-[200px] h-14 px-4 py-6 bg-lime-300 rounded-2xl justify-center items-center gap-2 inline-flex">
          <div className="text-gray-900 text-[17px] font-medium font-['Roboto'] leading-snug">Subscribe</div>
       </div>
      </div>
    </section>
  )
}

export default Hero