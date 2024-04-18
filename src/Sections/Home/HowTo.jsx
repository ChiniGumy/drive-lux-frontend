function HowTo() {
  return (
    <div className="p-24 w-full flex justify-center">

      <div className="flex items-center w-fit">
        <div className="flex flex-col items-center">
          <div className="mb-2 flex items-center justify-center h-24 w-24 bg-[#1A1A1A] rounded-[25px]">
            <img src="/svg/location-icon.svg" className="h-12 fill-[#000]" alt="" />
          </div>
          <p className="text-[#f1f1f1] text-center">Escoges tu ubicación</p>
        </div>

        <div className="w-[300px] mb-8 border-t-2  border-[#f1f1f1]" />

        <div className="flex flex-col items-center">
          <div className="mb-2 flex items-center justify-center h-24 w-24 bg-[#1A1A1A] rounded-[25px]">
            <img src="/svg/calendar-icon.svg" className="w-10 fill-[#000]" alt="" />
          </div>
          <p className="text-[#f1f1f1] text-center">Colocas la fecha de alquiler</p>
        </div>

        <div className="w-[300px] mb-8 border-t-2  border-[#f1f1f1]" />


        <div className="flex flex-col items-center">
          <div className="mb-2 flex items-center justify-center h-24 w-24 bg-[#1A1A1A] rounded-[25px]">
            <img src="/svg/car-icon.svg" className="w-12 fill-[#000]" alt="" />
          </div>
          <p className="text-[#f1f1f1] text-center">Seleccionas un auto</p>
        </div>
      </div>

      



    </div>
  )
}

export default HowTo