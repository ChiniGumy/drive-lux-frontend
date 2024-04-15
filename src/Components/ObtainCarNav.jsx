function ObtainCarNav() {
  return (
    <div className="bg-[#3D3D3D] flex px-8 py-5 rounded-[15px] w-fit translate-y-[-135px]">
      <div className="flex items-center justify-center">
        <img src="/svg/location-icon.svg" alt="" className="h-6"/>
        <p className="text-[#F1F1F1] ml-2">Guayaquil, Ecu</p>
      </div>
      
      <div className="flex-col ml-8 border-l pl-6 border-[#b5b3b3]">
        <h1 className="text-[#F1F1F1] font-bold">Inicio de renta</h1>
        <div className="text-[#e0e0e0] flex">
          <p>02/02/2024</p>
          <p className="ml-4">10:00 AM</p>
        </div>
      </div>

      <div className="flex-col ml-8 border-l pl-6 border-[#b5b3b3]">
        <h1 className="text-[#F1F1F1] font-bold">Inicio de renta</h1>
        <div className="text-[#e0e0e0] flex">
          <p>02/02/2024</p>
          <p className="ml-4">10:00 AM</p>
        </div>
      </div>

      <div className="flex items-center ml-8 border-l pl-6 ">
        <div className="bg-[#45B0DD] px-6 py-3 rounded-[10px] text-[#F7F7F7]">
          Obtener Auto
        </div>
      </div>


    </div>
  )
}

export default ObtainCarNav