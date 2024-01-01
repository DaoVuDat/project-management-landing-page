import { varela } from "@/app/font";
import clsx from "clsx";

export function Dot({ color }: { color?: string }) {
  return <span className={clsx(varela.className, color)}>.</span>;
}
