import React, { forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./DropdownButton.css";

const DropdownButton = forwardRef((props, ref) => {
  const { children, toggle, open } = props;

  return (
    <>
      <div
        onClick={toggle}
        ref={ref}
        className={`dropdown-btn ${open ? "button-open" : null}`}
      >
        {children}
        <span className="toggle-icon">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
    </>
  );
});

export default DropdownButton;
