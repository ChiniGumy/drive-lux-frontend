function OutlineBadge({ text }) {
  return (
    <div className="mr-[5px] border-2 border-[#A2A4A5] flex items-center justify-center rounded-[20px] py-1 px-3 w-fit">
      <p className="font-medium text-sm mt-[1px] text-[#A2A4A5]">{text}</p>
    </div>
  );
}

export default OutlineBadge;
