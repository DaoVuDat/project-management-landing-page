"use client";
import { BaseProp, Container } from "@/components/shared/Container";
import clsx from "clsx";
import { lato } from "@/app/font";
import { Dot } from "@/components/shared/Dot";
import React from "react";
import { Card, TestimonialCustomer } from "@/components/customers/Card";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const testimonials: TestimonialCustomer[] = [
  {
    content: "Good Services",
    name: "Daniel A",
    title: "Software Engineering",
  },
  {
    content: "Bad Services",
    name: "Daniel B",
    title: "CEO",
  },
  {
    content: "Average Services",
    name: "Daniel C",
    title: "CTO",
  },
];

export function Testimonial({ id, className }: BaseProp) {
  return (
    <Container id={id} className={className}>
      <h2
        className={clsx(
          "text-center text-4xl tracking-wider pb-8",
          lato.className,
        )}
      >
        What our customers say
        <Dot color="text-secondary" />
      </h2>
      <ul className="mt-8">
        {testimonials.map((t) => (
          <li key={t.name}>
            <Card testimonialCustomer={t} />
          </li>
        ))}
      </ul>
      <div className="flex text-2xl justify-center items-center space-x-8">
        <span className="p-3 cursor-pointer rounded-full border border-transparent transition duration-300 hover:border-slate-400">
          <HiArrowSmallLeft />
        </span>
        <span className="p-3 cursor-pointer rounded-full border border-transparent transition duration-300 hover:border-slate-400">
          <HiArrowSmallRight />
        </span>
      </div>
    </Container>
  );
}
