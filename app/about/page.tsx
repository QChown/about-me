import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className='h-[2000px] w-full flex relative'>
      <div className='bg-red-500 h-screen w-1/2 sticky top-0'></div>
      <div className='bg-blue-500 h-screen w-1/2'></div>
    </div>
  );
};

export default page;
