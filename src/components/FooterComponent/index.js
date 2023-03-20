import React from "react";

const FooterComponent = () => {
  return (
    <footer className="p-4 mt-0 mx-0 mb-2 md:mx-2 md:mb-4 md:mt-16 flex justify-center items-center">
      <span className="block text-sm text-slate-500 text-center">
        Copyright © {new Date().getFullYear()} Channel Release Management - PT
        Bank Mandiri (Persero) Tbk
      </span>
    </footer>
  );
};

export default FooterComponent;
