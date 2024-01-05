import clsx from "clsx";

interface ContainerProp {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Container({
  id,
  className,
  children,
  ...props
}: ContainerProp) {
  return (
    <div
      id={id}
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
