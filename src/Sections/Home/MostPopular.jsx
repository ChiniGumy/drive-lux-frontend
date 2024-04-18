import CarCard from "../../Components/CarCard";
import { Link } from "react-router-dom";

function MostPopular() {
  return (
    <div id='Autos' className="p-24 w-full flex flex-col items-center">
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

      <Link to='/catalogo' className="transition-all border-2 border-[#D9D9D9] px-10 py-3 rounded-[10px] mt-8 text-[#D9D9D9] text-xl  hover:bg-[#d8d8d843]">
        RESERVA TU CARRO YA
      </Link>

    </div>
  );
}

export default MostPopular;
