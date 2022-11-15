import React from "react";
import walletconnect from "../Assets/modal/Frame 195.png";
import metamask from "../Assets/modal/Frame 195 (1).png";
const Modal = ({ modal, setModal }) => {
  return (
    <div
      className="fixed inset-0 flex  justify-center items-center  bg-opacity-40 bg-black z-20  "
      onClick={() => setModal(!modal)}
    >
      <div className="bg-white w-10/12 h-2/6 md:w-4/12 md:h-72 p-8 rounded-lg gap-2 md:gap-4 flex flex-col ">
        <div className="flex justify-between">
          <h1>Connect Wallet</h1>
          <hr className=" divide-x-4" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setModal(!modal)}
          >
            <path
              d="M18 6L6 18"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <p>Choose Your Preferred Wallet:</p>
        <button
          type="submit"
          className="flex items-center justify-between gap-14 border-2 border-gray-400 w-full p-1 rounded-lg"
        >
          <img src={metamask} alt="" />
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
              fill="#959DA6"
            />
          </svg>
        </button>
        <button
          type="submit"
          className="flex gap-12 justify-between items-center border-2 border-gray-400 p-1 rounded-lg"
        >
          <img src={walletconnect} alt="" />
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
              fill="#959DA6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
