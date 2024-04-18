function AboutUs() {
  return (
    <div id='Nosotros' className="bg-[#111] p-24 w-full flex flex-col items-center">
      <div className="flex items-center mb-24">
        <div className="w-20 h-1 border-t-[6px] border-[#3092BB]"/>
        <h1 className="mx-6 font-bold tracking-[1px] text-[50px] text-[#F1F1F1]">NOSOTROS</h1>
        <div className="w-20 h-1 border-t-[6px] border-[#3092BB]"/>
      </div>

      <div className="w-[80%] flex justify-between h-[400px]">
        <img className="h-full object-cover w-[50%]" src="/img/quienes-somos.png" alt="" />
        <div className="flex flex-col w-[45%]">
          <h1 className="text-3xl font-bold text-[#3092BB]">QUIENES SOMOS</h1>
          <p className="text-xl leading-[38px] w-[50ch] text-[#D4D5D7] my-4 ">Bienvenidos a Drive-Lux, la plataforma líder en alquiler de vehículos de lujo. Nuestra misión es ofrecer una experiencia incomparable a aquellos que desean el placer de conducir con estilo y exclusividad. En Drive-Lux, entendemos que el lujo no es solo una opción, es una necesidad.</p>
        </div>
      </div>

      <div className="w-[80%] flex justify-between h-[450px] mt-24">
        <div className="flex flex-col items-end w-[45%]">
          <h1 className="text-end text-3xl font-bold text-[#3092BB]">DESDE NUESTROS <br/> INICIOS EN 2021</h1>
          <p className="text-end text-xl leading-[38px] w-[50ch] text-[#D4D5D7] my-4 ">Hemos dedicado cada momento a curar una flota impresionante de vehículos de alta gama, seleccionando meticulosamente cada modelo por su rendimiento, diseño y capacidad de ofrecer una experiencia única en su clase. Nuestros clientes regresan porque saben que en Drive-Lux, la calidad y el servicio excepcional son la norma.</p>
        </div>
        <img className="h-full object-cover w-[50%]" src="/img/inicios.png" alt="" />
      </div>
    </div>
  )
}

export default AboutUs