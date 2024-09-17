import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={topFunction}
      id="back-to-top"
      className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 w-12 h-12 bg-teal-500 text-white flex items-center justify-center"
    >
      <FaArrowUp />
    </a>
  );
};

export default BackToTopButton;
