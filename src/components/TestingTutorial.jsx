import { IoFingerPrintSharp } from "react-icons/io5";
const TestingTutorial = (props) => {
  const { handlers } = props;
  const { handleClickButton, handleHoverButton } = handlers;

  //   const handleClickButton = (event) => {
  //     console.log(event);
  //     alert(`Hi ${name}!, your age is ${age}.`);
  //   };

  return (
    <>
      <div className="grid grid-cols-4 m-auto gap-3">
        <IoFingerPrintSharp />

        <button className="text-white" onClick={handleClickButton}>
          Click
        </button>
        <button className="text-white" onMouseEnter={handleHoverButton}>
          Hover
        </button>
      </div>
    </>
  );
};

export default TestingTutorial;
