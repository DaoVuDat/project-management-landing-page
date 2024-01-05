import { Container } from "@/components/shared/Container";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { NavLink } from "@/components/shared/NavLink";
import { Button } from "@/components/shared/Button";

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="z-10 flex justify-between">
          <div className="flex items-center md:gap-x-10">
            <Link className="group" href="/">
              <Logo className="h-20 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#">Contact</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#customers">Customers</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Login</NavLink>
            </div>
            <Button href="/register">
              <span>Sign Up Now</span>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
