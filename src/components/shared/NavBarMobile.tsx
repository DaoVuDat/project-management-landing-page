"use client";

import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { NavLink } from "@/components/shared/NavLink";
import { Button } from "@/components/shared/Button";
import { useState } from "react";

export function NavBarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-[999] fixed top-0 left-0 w-screen lg:hidden bg-background-color">
      <div className="flex justify-between items-center">
        <Link className="group" href="/">
          <Logo className="h-12 w-auto" />
        </Link>
        <div onClick={() => setIsOpen((s) => !s)}>Button</div>
      </div>

      <div className="h-screen flex flex-col justify-between">
        <div className="mt-16 flex flex-col justify-between items-center text-lg">
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#customers">Customers</NavLink>
        </div>
        <div className="flex justify-between items-center ">
          <div>
            <NavLink href="/login">Login</NavLink>
          </div>
          <Button href="/register">
            <span>Sign Up Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
