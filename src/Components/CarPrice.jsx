function CarPrice({type, amount, decimals}) {
  return (
    <div className="font-medium flex items-end">
      <h1 className="text-4xl text-white">${amount}</h1>
      <p className="text-2xl text-white">{decimals}</p>
      <span className="text-2xl text-[#45B0DD]">/{type}</span>
    </div>
  )
}

export default CarPrice