import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/shared/Hero";
import { Projects } from "@/components/projects/Projects";
import { Features } from "@/components/features/Features";
import { Footer } from "@/components/shared/Footer";
import { Testimonial } from "@/components/customers/Testimonial";
import Logo from "@/components/shared/Logo";
import { Container } from "@/components/shared/Container";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { ZaloLogo } from "@/components/shared/ZaloLogo";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects id="projects" className="mt-12 lg:mt-24" />
        <Features id="features" className="mt-12 lg:mt-24" />
        <Testimonial id="customers" className="mt-24" />
      </main>
      <section className="mt-16">
        <Container>
          <div className="flex flex-col space-y-4 min-[540px]:flex-row min-[540px]:justify-between min-[540px]:text-lg">
            <div className="flex flex-col items-start space-y-3">
              <Logo className="h-20 w-auto" />
              <div className="flex space-x-4 items-center">
                <span className="text-3xl lg:text-2xl">
                  <HiOutlineMail />
                </span>
                <span>dat.daovu@gmail.com</span>
              </div>
              <div className="flex space-x-4 items-center">
                <span className="text-3xl lg:text-2xl">
                  <AiOutlinePhone />
                </span>
                <span>(+84) 093.143.5335 - (+84) 079.230.4323</span>
              </div>
              <div className="flex space-x-4 items-center">
                <span className="text-3xl lg:text-2xl">
                  <FaRegAddressCard />
                </span>
                <span>Ho Chi Minh City (HCMC), Vietnam</span>
              </div>
            </div>

            <div className="self-end">
              <ul className="flex space-x-4">
                <li className="w-12 h-12 p-2 rounded-full border border-slate-400 flex justify-center items-center">
                  <ZaloLogo className="h-6 w-full" />
                </li>
                <li className="cursor-pointer flex justify-center items-center w-12 h-12 p-2 rounded-full border border-slate-400 text-xl transition duration-500 hover:text-white hover:bg-black">
                  <a href="https://github.com/DaoVuDat" target="_blank">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <Footer className="mt-8" />
    </>
  );
}
