import { Container } from "@/components/shared/Container";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { NavLink } from "@/components/shared/NavLink";
import { Button } from "@/components/shared/Button";
import { NavBarClient } from "@/components/shared/NavBarMobile";

export function Header() {
  return (
    <>
      <header className="py-10 hidden md:block">
        <Container>
          <nav className="z-10 hidden lg:flex lg:justify-between xl:text-lg">
            <div className="flex items-center gap-x-10">
              <Link className="group" href="/">
                <Logo className="h-20 w-auto" />
              </Link>
              <div className="flex gap-x-6">
                <NavLink href="#">Contact</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#customers">Customers</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-x-5">
              <div>
                <NavLink href="/login">Login</NavLink>
              </div>
              <Button href="/register">
                <span>Sign Up Now</span>
              </Button>
            </div>
          </nav>
        </Container>
      </header>
      {/*For mobile*/}
      <NavBarClient />
    </>
  );
}
