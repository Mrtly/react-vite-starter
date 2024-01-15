import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | React.ReactNode;
  className?: string;
};

const Button = ({ className, children, ...props }: ButtonProps) => {
  const buttonStyles = cn(
    "text-md w-fit cursor-pointer rounded px-4 py-2",
    "bg-gray-900 tracking-wider text-white shadow",
    "transition-all duration-200 hover:bg-gray-800 active:scale-[.98]",
    className
  );

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export { Button };
