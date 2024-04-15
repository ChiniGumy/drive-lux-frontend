function Footer() {
  return (
    <div className="bg-[#0A0A0A] flex w-full px-12 py-12">

      <div>
        <h1 className="font-bold tracking-[1px] text-2xl mb-8">
          <span className="text-[#45B0DD]">DRIVE</span>
          <span className="text-white">-LUX</span>
        </h1>
        
        <p className="text-[#f1f1f1]">¡Suscribete para notifcarte de autos nuevos!</p>
        
        <div className="mt-2 mb-24 flex w-[310px] justify-between">
          <input type="email" className="w-[83%] transition-all px-2 py-1 bg-transparent rounded-[5px] border border-[#f1f1f1] text-[#f1f1f1] focus:outline-none focus:border-[#45B0DD]"/>
          <button type="submit" className="rounded-[5px] w-[12%] transition-all hover:bg-[#3c99c1] bg-[#45B0DD]"></button>
        </div>

        <p className="text-[#f1f1f1]">© 2024 Drive-lux</p>

      </div>

      <div className="ml-64">
        <h1 className="mb-2 text-xl text-white font-bold tracking-[1px]">Top Autos</h1>
        <p className="mt-1 text-[#eaeaea]">Lambo</p>
        <p className="mt-1 text-[#f1f1f1]">Ferrari</p>
        <p className="mt-1 text-[#f1f1f1]">Audi</p>
        <p className="mt-1 text-[#f1f1f1]">Camaro</p>
        <p className="mt-1 text-[#f1f1f1]">Mustang</p>
      </div>

      <div className="ml-32 ">
        <p className="font-medium mt-1 text-[#848484]">Terms</p>
        <p className="font-medium mt-1 text-[#848484]">Privacy Policy</p>
        <p className="font-medium mt-1 text-[#848484]">Legal Notice</p>
        <p className="font-medium mt-1 text-[#848484]">Accesibility</p>
      </div>
       
    </div>
  )
}

export default Footer