"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/border-heading";
import { CarTaxiFront } from 'lucide-react';



interface HeadingProps {
  heading: string;
}

export function Heading({ heading }: HeadingProps) {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <CarTaxiFront />
        
        <span>{heading}</span>
      </HoverBorderGradient>
    </div>
  );
}