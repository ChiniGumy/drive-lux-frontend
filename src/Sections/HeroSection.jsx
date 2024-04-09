import Navbar from "../Components/Navbar"

function HeroSection() {
  return (
    <div className="h-screen flex bg-gradient-to-t from-[#111111] from-10% via-transparent to-[#25252534] to-1%">

    <Navbar />

      <div className="px-12 py-12 flex-col w-full">

        <div className="h-full flex">

          <div className="w-[60%] relative">
            <h1 className=" font-bold leading-[54px] tracking-[2px] text-5xl text-white absolute top-[200px]">CONDUCELOS TU MISMO <br/> DESDE AHORA</h1>
          </div>

          <div className="w-[40%]">
          </div>

        </div>

      </div>
      
      <img src="/img/blue-car.png" alt="" className="z-[-999] fixed w-full object-cover brightness-[.3]" />
    </div>
  )
}

export default HeroSection