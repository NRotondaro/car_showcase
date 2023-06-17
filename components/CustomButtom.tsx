'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface CustomButtomProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButtom;
