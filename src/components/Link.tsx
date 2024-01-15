import { cn } from "@/utils/cn";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: string | React.ReactNode;
  className?: string;
};

const Link = ({ href, children, className, ...props }: LinkProps) => {
  const LinkStyles = cn("underline text-sky-600 w-fit", className);

  return (
    <a href={href} className={LinkStyles} {...props}>
      {children}
    </a>
  );
};

export { Link };
