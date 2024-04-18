
function Navbar() {
  return (
    <div className="bg-[#0000005c] fixed w-full flex justify-between h-16 items-center px-12 ">
      <h1 className="font-bold tracking-[1px] text-3xl">
        <span className="text-[#45B0DD]">DRIVE</span>
        <span className="text-white">-LUX</span>
      </h1>

      <div className="text-xl text-[#f1f1f1] tracking-[1px]">
        <a href='#Nosotros'>Nosotros</a>
        <a href='#Autos' className="mx-8" >Autos</a>
        <a href='#FAQ' >FAQ</a>
      </div>
      
      <div className="flex items-center text-white">
        <p className="tracking-[1px]">+593 99 123 456</p>
        <div className="ml-8 border-2 px-4 py-1 rounded-[5px]">Login</div>
      </div>
    </div>
  )
}

export default Navbar