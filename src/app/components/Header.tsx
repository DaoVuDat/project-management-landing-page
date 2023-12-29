import { Container } from "@/app/components/Container";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import { NavLink } from "@/app/components/NavLink";
import { Button } from "@/app/components/Button";

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
              <NavLink href="#passion">Find passion</NavLink>
              <NavLink href="#categories">Categories</NavLink>
              <NavLink href="#skills">Skills</NavLink>
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
