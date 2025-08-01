'use client';
import { useState } from "react";
import Landing from "./components/landing";

export default function Home() {
  const [screen, setScreen] = useState("landing"); // Initialize screen state

  return (
    <>
      {screen === "landing" && (
        <Landing onLoginClick={() => setScreen("login")} />
      )}
    </>
  );
}
