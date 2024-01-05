import Link from "next/link";
import clsx from "clsx";

const baseStyle = "";

interface ButtonProp {
  children?: React.ReactNode;
  href?: string;
}

export function Button({ children, href, ...props }: ButtonProp) {
  return href ? (
    <Link
      className="group inline-flex font-semibold items-center justify-center rounded-full py-3 px-6 bg-[#FD841F] text-white
        focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 shadow-[inset_0_50px_0_0px_#001253]
        hover:text-slate-900 relative transition-all duration-300 hover:shadow-[inset_0_50px_0_-50px_#001253]"
      href={href}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button className={clsx(baseStyle)} {...props}>
      {children}
    </button>
  );
}
