import clsx from "clsx";

export interface BaseProp {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Container({ id, className, children, ...props }: BaseProp) {
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
