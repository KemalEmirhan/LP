'use client'

import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyThisPackage from "@/components/WhyThisPackage";
import BrandTrust from "@/components/BrandTrust";
import GetStarted from "@/components/GetStarted";
import Form from "@/components/Form";

export default function Home() {
  const [showCTA, setShowCTA] = useState(false);

  const { ref } = useInView({
    rootMargin: "-100px",
    onChange: (inView) => {
      if (!inView) {
        setShowCTA(true);
        return;
      }

      setShowCTA(false);
    },
  });

  return (  
    <>
      <Navbar showCTA={showCTA} />
      <Hero ref={ref} />
      <WhyThisPackage />
      <BrandTrust />
      <GetStarted />
      <Form />
    </>
  );
}
