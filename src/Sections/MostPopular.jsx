import CarCard from "../Components/CarCard";

function MostPopular() {
  return (
    <div className="p-24 w-full flex flex-col items-center">
      <div className="flex items-center mb-24">
        <div className="w-20 h-1 border-t-[6px] border-[#3092BB]" />
        <h1 className="mx-6 font-bold tracking-[1px] text-[50px] text-[#F1F1F1]">MÁS POPULARES</h1>
        <div className="w-20 h-1 border-t-[6px] border-[#3092BB]" />
      </div>
      <div className="flex w-[75%] justify-around">
        <CarCard name='MERCEDES AMG GT 63 S' carImg='/img/mercedes.webp'/>
        <CarCard name='MERCEDES AMG GT 63 S' carImg='/img/mercedes.webp'/>
        <CarCard name='MERCEDES AMG GT 63 S' carImg='/img/mercedes.webp'/>
      </div>
      <div className="border-2 border-[#D9D9D9] px-10 py-3 rounded-[10px] mt-8">
        <h1 className="text-[#D9D9D9] text-xl">RESERVA TU CARRO YA</h1>
      </div>
    </div>
  );
}

export default MostPopular;
