import Link from "next/link"

const Navbar = () => {
  return (
  <Link href="/">
      <nav className="w-[1440px] h-[104px] px-[120px] py-6 bg-white justify-between items-center inline-flex">
       <div className="justify-start items-center gap-10 flex">
        <div className="w-[107px] h-[30.06px] relative">
          <img src="/Group 239484.jpg" alt="Icon" />
       </div>
        <ul className="justify-start items-center gap-6 flex ">
            <ul className=" hover:border-lime-300 hover:border-b-2 hover:font-bold justify-center items-center gap-2.5 flex">
                <div className="text-center text-gray-900 text-sm font-medium font-['Roboto'] leading-[18.42px]">News</div>
            </ul>
            <ul className="text-gray-900 hover:border-lime-300 hover:border-b-2 text-sm font-normal font-['Roboto'] leading-[18.42px]">Product</ul>
            <ul className="text-gray-900 hover:border-lime-300 hover:border-b-2 text-sm font-normal font-['Roboto'] leading-[18.42px]">Overseas</ul>
            <ul className="text-gray-900 hover:border-lime-300 hover:border-b-2 text-sm font-normal font-['Roboto'] leading-[18.42px]">Travel</ul>
            <ul className="text-gray-900 hover:border-lime-300 hover:border-b-2  text-sm font-normal font-['Roboto'] leading-[18.42px]">Insight</ul>
        </ul>
    </div>
    <div className="justify-start items-center gap-12 flex">
        <ul className="text-gray-900 hover:border-lime-300 hover:border-b-2  text-sm font-normal font-['Roboto']">Help</ul>
        <div className="w-[200px] h-14 px-4 py-6 bg-lime-300 rounded-2xl justify-center items-center gap-2 flex">
            <div className="text-gray-900 text-[17px] font-medium font-['Roboto'] leading-snug">Subscribe</div>
        </div>
    </div>
   </nav>
  </Link>
 
        
   
  )
}

export default Navbar