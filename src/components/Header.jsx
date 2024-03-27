import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white px-5 h-12 flex justify-between items-center">
      <div className="">
        <h1>logo</h1>
      </div>
      <div className="flex">
        <ul className="flex space-x-3">
          <li className="text-gray-950">Home</li>
          <li
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
            className="relative"
          >
            About
            {isAboutDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md mt-1 py-2 px-3 text-nowrap">
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            )}
          </li>
          <li>Our Advantage</li>

          <li
            onMouseEnter={() => setIsProductDropdownOpen(true)}
            onMouseLeave={() => setIsProductDropdownOpen(false)}
            className="relative"
          >
            Product
            {isProductDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md mt-1 py-2 px-3">
                <li>Dropdown Item 1</li>
                <li>Dropdown Item 2</li>
                <li>Dropdown Item 3</li>
              </ul>
            )}
          </li>
          <li>sustainability</li>
          <li>certificate</li>
          <li>contact us</li>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;