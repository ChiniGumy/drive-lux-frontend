import Badge from "./Badge"
import OutlineBadge from "./OutlineBadge"
import CarPrice from "./CarPrice"

function CarCard({name, carImg}) {
  return (
    <div className="flex flex-col justify-between w-[400px] h-fit rounded-[15px] bg-gradient-to-b from-[#1B1A1B] from-[0%] via-[#697276] via-[44%] to-[#171717] to-[88%] p-6">

      <div>
        <div>
            <h1 className="font-medium tracking-[.5px] text-[#f0f0f0] text-2xl mb-1">{name}</h1>
        </div>

        <div className="flex">
          <OutlineBadge text='SIMILAR SUV' />
          <OutlineBadge text='4X2 ' />
        </div>
      </div>

        <div>
          <img className="my-8" src={carImg} alt="" />
        </div>

        <div>
          <div className="mb-2">
            <CarPrice type='DÍA' amount='189' decimals='.99'/>
          </div>

          <div className="flex">
            <Badge icon={'/svg/automatic-icon.svg'} text='AUTOMÁTICO'/>
            <Badge icon={'/svg/person-icon.svg'} text='2'/>
            <Badge icon={'/svg/maletin-icon.svg'} text='20KG'/>
            {/* <Badge icon={'/svg/shift-icon.svg'} text='MANUAL'/> */}
          </div>
        </div>
    </div>
  )
}

export default CarCard