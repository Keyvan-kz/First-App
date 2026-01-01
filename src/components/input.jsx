import { useState } from "react";

function Input() {
  //   const [value, setValue] = useState("متن خود را وارد کنید");
  //   function getValue(e) {
  //     const inputValue = e.target.value;
  //     if (!inputValue.trim()) {
  //       setValue("متن خود را وارد کنید");
  //     } else setValue(inputValue.trim());
  //   }

  const [type, setType] = useState("password");
  const [showIconSrc, setshowIconSrc] = useState("./src/assets/eye-close.svg");

  const handleClick = (e) => {
    const inputType = document.getElementById("test").type;
    const showIcon = e.target;

    if (inputType === "password") {
      setType("text");
      setshowIconSrc("./src/assets/eye-open.svg");
    } else if (inputType === "text") {
      setType("password");
      setshowIconSrc("./src/assets/eye-close.svg");
    }
  };

  return (
    <>
      <div className="text-center max-w-100 shadow-xl">
        <div className="text-center bg-white border rounded-lg p-1 flex justify-between items-center">
          <input
            type={type}
            className=" p-2 rounded m-2 outline-none"
            id="test"
            placeholder="رمز عبور"
          />
          <button
            className="cursor-pointer p-2 transition ease dur"
            onClick={handleClick}
          >
            <img id="show-icon" src={showIconSrc} width="20px" alt="" />
          </button>
        </div>
        {/* <p className="m-2 p- inline font-bold">{value}</p> */}
      </div>
    </>
  );
}

export default Input;
