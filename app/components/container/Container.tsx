import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      {children}
    </div>
  );
};

export default Container;
