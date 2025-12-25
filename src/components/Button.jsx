function Button(props) {
  const btnType = (type, dark) => {
    if (type === "primary" && dark === "no") {
      return "w-[194px] h-[72px] rounded-full bg-white hover:bg-[#CDFF8C] transition ease duration-300 disabled:bg-gray-300 disabled:text-gray-50 disabled:cursor-default";
    } else if (type === "secondary" && dark === "no") {
      return "w-[118px] h-[38px] text-white rounded hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black transition ease duration-200 disabled:bg-gray-300 disabled:text-gray-50 disabled:cursor-default disabled:shadow-none";
    } else if (type === "stroke" && dark === "no") {
      return "w-[118px] h-[38px] text-white border rounded hover:border-none hover:text-black hover:bg-[#CDFF8C] transition ease duration-300 disabled:bg-gray-400 disabled:border-none disabled:text-gray-50 disabled:cursor-default";
    } else if (type === "primary" && dark === "yes") {
      return "w-[194px] h-[72px] rounded-full text-white bg-[#1F4037] hover:text-black hover:bg-[#CDFF8C] transition ease duration-300 disabled:bg-gray-500 disabled:text-gray-50 disabled:cursor-default ";
    } else if (type === "secondary" && dark === "yes") {
      return "w-[118px] h-[38px] text-white bg-[#1F4037] rounded hover:text-[#CDFF8C] hover:shadow-lg hover:shadow-black transition ease duration-200 disabled:bg-gray-500 disabled:text-gray-50 disabled:cursor-default disabled:shadow-none";
    } else if (type === "stroke" && dark === "yes") {
      return "";
    }
  };

  return (
    <button
      disabled={props.disabled}
      className={`flex justify-center cursor-pointer items-center  ${btnType(
        props.type,
        props.darkmode
      )}`}
    >
      {props.text}
    </button>
  );
}

export default Button;
