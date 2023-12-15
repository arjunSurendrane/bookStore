// StickyHeader.js

import { useEffect, useState } from "react";
import Header from "./Header";

const StickyHeader = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${
        isSticky ? "bg-white shadow-md" : ""
      }`}
    >
      <Header />
    </div>
  );
};

export default StickyHeader;
