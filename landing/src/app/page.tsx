"use client";
import { AuroraBackground } from "@/components/ui/aura-back";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import ChromaGrid from "@/components/ui/team";
import { Heading } from "@/components/main/heading/page";
import Team from "./team/page";
import Background from "@/components/main/background/page";

export default function Home() {
  return (
    <>
      <Background />
      <Team />
    </>
  );
}  