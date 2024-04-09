function Badge({ icon, text }) {
  return (
    <div className="mr-[5px] bg-[#303030] flex items-center justify-center rounded-[20px] py-1 px-3 w-fit">
      <img src={icon} className="h-3 w-3 mr-2" alt="" />
      <p className="text-[#F0F0F0] font-medium text-sm mt-[1px]">{text}</p>
    </div>
  );
}

export default Badge;
