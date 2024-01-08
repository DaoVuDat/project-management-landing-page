"use client";

import { Card, TestimonialCustomer } from "@/components/customers/Card";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { Container } from "@/components/shared/Container";

export function Carousel({
  testimonials,
}: {
  testimonials: TestimonialCustomer[];
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const x = useMotionValue(0);
  const diff = carouselWidth - screenWidth;
  const offset = 112; // 112px for margin left and right of first and last card respectively
  const velocity = 450; // 450px for slider

  const next = () => {
    if (x.get() <= 0) {
      const willMove = x.get() - velocity;
      if (willMove > -diff) {
        animate(x, willMove);
      } else {
        animate(x, -diff - offset);
      }
    }
  };

  const prev = () => {
    if (x.get() >= -diff - offset) {
      const willMove = x.get() + velocity;
      if (willMove < 0) {
        animate(x, willMove);
      } else {
        animate(x, 0);
      }
    }
  };

  useLayoutEffect(() => {
    setCarouselWidth(ref.current!.scrollWidth);
    setScreenWidth(ref.current!.offsetWidth);
  }, []);

  return (
    <>
      <ul
        ref={ref}
        className="mt-8 flex space-x-10 lg:w-screen overflow-x-hidden"
      >
        {testimonials.map((t) => (
          <motion.li
            className="first:ml-28 last:mr-28 w-96 shrink-0 grow-0"
            style={{ x: x }}
            key={t.name}
          >
            <Card testimonialCustomer={t} />
          </motion.li>
        ))}
      </ul>
      <Container className="mt-16">
        <div className="flex text-2xl justify-center items-stretch space-x-8">
          <span
            className="p-3 cursor-pointer rounded-full border border-transparent transition duration-300 hover:border-slate-400"
            onClick={prev}
          >
            <HiArrowSmallLeft />
          </span>
          <span
            className="p-3 cursor-pointer rounded-full border border-transparent transition duration-300 hover:border-slate-400"
            onClick={next}
          >
            <HiArrowSmallRight />
          </span>
        </div>
      </Container>
    </>
  );
}
