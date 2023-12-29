import clsx from "clsx";

interface ContainerProp {
  className?: string;
  children?: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProp) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
