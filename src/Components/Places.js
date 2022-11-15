import React from "react";
import image1 from "../Assets/places/Frame 151 (8).jpg";
import image2 from "../Assets/places/Frame 151 (9).jpg";
import image3 from "../Assets/places/Frame 151 (10).jpg";
import image4 from "../Assets/places/Frame 151 (11).jpg";
import image5 from "../Assets/places/Frame 151 (12).jpg";
import image6 from "../Assets/places/Frame 151 (13).jpg";
import image7 from "../Assets/places/Frame 151 (14).jpg";
import image8 from "../Assets/places/Frame 151 (15).jpg";
import image9 from "../Assets/places/Frame 151 (16).jpg";
import image10 from "../Assets/places/Frame 151 (17).jpg";
import image11 from "../Assets/places/Frame 151 (18).jpg";
import image12 from "../Assets/places/Frame 151 (19).jpg";
import image13 from "../Assets/places/Frame 151 (23).jpg";
import image14 from "../Assets/places/Frame 151 (20).jpg";
import image15 from "../Assets/places/Frame 151 (21).jpg";
import image16 from "../Assets/places/Frame 151 (22).jpg";
const Places = () => {
  const places = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
    {
      image: image9,
    },
    {
      image: image10,
    },
    {
      image: image11,
    },
    {
      image: image12,
    },
    {
      image: image13,
    },
    {
      image: image14,
    },
    {
      image: image15,
    },
    {
      image: image16,
    },
  ];
  return (
    <div className="mt-14">
      <div className="flex justify-center gap-4 items-center p-4 text-xs font-bold">
        <select
          name=""
          id=""
          className="md:hidden flex border-grey-300 border-2 p-3 rounded-lg w-3/6"
        >
          <option value="Cottage">Restaurant</option>
          <option value="Cottage">Cottage</option>
          <option value="Cottage">Castle</option>
          <option value="Cottage">Fantast City</option>
          <option value="Cottage">Beach</option>
          <option value="Cottage">Cabins</option>
          <option value="Cottage">Off-grid</option>
          <option value="Cottage">Farm</option>
        </select>
        <ul className="md:flex hidden justify-between items-center w-3/4 ">
          <li className="">
            <a href="http://">Restaurant</a>
          </li>
          <li>
            <a href="http://">Cottage</a>
          </li>
          <li>
            <a href="http://">Castle</a>
          </li>
          <li>
            <a href="http://">Fantast City</a>
          </li>
          <li>
            <a href="http://">Beach</a>
          </li>
          <li>
            <a href="http://">Cabins</a>
          </li>
          <li>
            <a href="http://">Off-grid</a>
          </li>
          <li>
            <a href="http://">Farm</a>
          </li>
        </ul>
        <li className="flex border-grey-300 border-2 p-2 rounded-lg  md:w-auto">
          <input type="text" name="" id="" placeholder="Location" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9999 5L10.9999 5"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99985 5H1.99985"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9999 12H16.9999"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9999 12H1.99985"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.9999 19H10.9999"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99985 19H1.99985"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9999 21V17"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9999 7V3"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0001 14V10"
              stroke="#333333"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </div>
      {/* CARDS */}
      <div className="md:grid md:grid-flow-row md:gap-12 md:grid-cols-4 p-10 flex flex-col gap-6">
        {places.map((place) => {
          return (
            <div
              className="flex flex-col rounded-xl border-2 border-gray-300 p-4 hover:scale-105 gap-1 "
              key={place.image}
            >
              <img src={place.image} alt="" />
              <span className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold mt-2">
                  <div>Desert King</div>
                  <div>1MBT per night</div>
                </div>
                <div className="flex justify-between text-xs font-bold mt-2">
                  <div>2345Km away</div>
                  <div>available for 2weeks stay</div>
                </div>
                <svg
                  width="92"
                  height="12"
                  viewBox="0 0 92 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.12475 1.58383C5.50519 0.895394 6.49481 0.895394 6.87525 1.58383L7.65696 2.99839C7.80037 3.2579 8.05154 3.44039 8.34267 3.49659L9.92956 3.80292C10.7019 3.952 11.0077 4.89318 10.4705 5.46774L9.36673 6.64831C9.16423 6.8649 9.06829 7.16017 9.10481 7.45442L9.30385 9.0583C9.40072 9.83887 8.6001 10.4206 7.88767 10.0872L6.42379 9.40229C6.15524 9.27663 5.84476 9.27663 5.57621 9.40229L4.11233 10.0872C3.3999 10.4206 2.59928 9.83887 2.69615 9.0583L2.89519 7.45442C2.93171 7.16017 2.83577 6.8649 2.63327 6.64831L1.5295 5.46774C0.992327 4.89318 1.29814 3.952 2.07044 3.80292L3.65733 3.49659C3.94846 3.44039 4.19963 3.2579 4.34304 2.99839L5.12475 1.58383Z"
                    fill="url(#paint0_linear_1_764)"
                  />
                  <path
                    d="M25.1248 1.58383C25.5052 0.895394 26.4948 0.895394 26.8752 1.58383L27.657 2.99839C27.8004 3.2579 28.0515 3.44039 28.3427 3.49659L29.9296 3.80292C30.7019 3.952 31.0077 4.89318 30.4705 5.46774L29.3667 6.64831C29.1642 6.8649 29.0683 7.16017 29.1048 7.45442L29.3039 9.0583C29.4007 9.83887 28.6001 10.4206 27.8877 10.0872L26.4238 9.40229C26.1552 9.27663 25.8448 9.27663 25.5762 9.40229L24.1123 10.0872C23.3999 10.4206 22.5993 9.83887 22.6961 9.0583L22.8952 7.45442C22.9317 7.16017 22.8358 6.8649 22.6333 6.64831L21.5295 5.46774C20.9923 4.89318 21.2981 3.952 22.0704 3.80292L23.6573 3.49659C23.9485 3.44039 24.1996 3.2579 24.343 2.99839L25.1248 1.58383Z"
                    fill="url(#paint1_linear_1_764)"
                  />
                  <path
                    d="M45.1248 1.58383C45.5052 0.895394 46.4948 0.895394 46.8752 1.58383L47.657 2.99839C47.8004 3.2579 48.0515 3.44039 48.3427 3.49659L49.9296 3.80292C50.7019 3.952 51.0077 4.89318 50.4705 5.46774L49.3667 6.64831C49.1642 6.8649 49.0683 7.16017 49.1048 7.45442L49.3039 9.0583C49.4007 9.83887 48.6001 10.4206 47.8877 10.0872L46.4238 9.40229C46.1552 9.27663 45.8448 9.27663 45.5762 9.40229L44.1123 10.0872C43.3999 10.4206 42.5993 9.83887 42.6961 9.0583L42.8952 7.45442C42.9317 7.16017 42.8358 6.8649 42.6333 6.64831L41.5295 5.46774C40.9923 4.89318 41.2981 3.952 42.0704 3.80292L43.6573 3.49659C43.9485 3.44039 44.1996 3.2579 44.343 2.99839L45.1248 1.58383Z"
                    fill="url(#paint2_linear_1_764)"
                  />
                  <path
                    d="M65.1248 1.58383C65.5052 0.895394 66.4948 0.895394 66.8752 1.58383L67.657 2.99839C67.8004 3.2579 68.0515 3.44039 68.3427 3.49659L69.9296 3.80292C70.7019 3.952 71.0077 4.89318 70.4705 5.46774L69.3667 6.64831C69.1642 6.8649 69.0683 7.16017 69.1048 7.45442L69.3039 9.0583C69.4007 9.83887 68.6001 10.4206 67.8877 10.0872L66.4238 9.40229C66.1552 9.27663 65.8448 9.27663 65.5762 9.40229L64.1123 10.0872C63.3999 10.4206 62.5993 9.83887 62.6961 9.0583L62.8952 7.45442C62.9317 7.16017 62.8358 6.8649 62.6333 6.64831L61.5295 5.46774C60.9923 4.89318 61.2981 3.952 62.0704 3.80292L63.6573 3.49659C63.9485 3.44039 64.1996 3.2579 64.343 2.99839L65.1248 1.58383Z"
                    fill="url(#paint3_linear_1_764)"
                  />
                  <path
                    d="M85.1248 1.58383C85.5052 0.895394 86.4948 0.895394 86.8752 1.58383L87.657 2.99839C87.8004 3.2579 88.0515 3.44039 88.3427 3.49659L89.9296 3.80292C90.7019 3.952 91.0077 4.89318 90.4705 5.46774L89.3667 6.64831C89.1642 6.8649 89.0683 7.16017 89.1048 7.45442L89.3039 9.0583C89.4007 9.83887 88.6001 10.4206 87.8877 10.0872L86.4238 9.40229C86.1552 9.27663 85.8448 9.27663 85.5762 9.40229L84.1123 10.0872C83.3999 10.4206 82.5993 9.83887 82.6961 9.0583L82.8952 7.45442C82.9317 7.16017 82.8358 6.8649 82.6333 6.64831L81.5295 5.46774C80.9923 4.89318 81.2981 3.952 82.0704 3.80292L83.6573 3.49659C83.9485 3.44039 84.1996 3.2579 84.343 2.99839L85.1248 1.58383Z"
                    fill="url(#paint4_linear_1_764)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_764"
                      x1="1.37419"
                      y1="-3.6517e-07"
                      x2="11.5161"
                      y2="-5.09166e-07"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A02279" />
                      <stop stop-color="#A02279" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_764"
                      x1="21.3742"
                      y1="-3.6517e-07"
                      x2="31.5161"
                      y2="-5.09166e-07"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A02279" />
                      <stop stop-color="#A02279" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_764"
                      x1="41.3742"
                      y1="-3.6517e-07"
                      x2="51.5161"
                      y2="-5.09166e-07"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A02279" />
                      <stop stop-color="#A02279" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_764"
                      x1="61.3742"
                      y1="-3.6517e-07"
                      x2="71.5161"
                      y2="-5.09166e-07"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A02279" />
                      <stop stop-color="#A02279" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_1_764"
                      x1="81.3742"
                      y1="-3.6517e-07"
                      x2="91.5161"
                      y2="-5.09166e-07"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A02279" />
                      <stop stop-color="#A02279" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;