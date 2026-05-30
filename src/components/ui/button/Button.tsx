import React from "react";
import styles from "./Button.module.css";

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type Size = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

type ChildWithClassName = {
  className?: string;
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.button,
      styles[variant],
      styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // ✅ asChild (NO ref here)
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<ChildWithClassName>;

      return React.cloneElement(child, {
        className: `${classes} ${child.props.className ?? ""}`.trim(),
        ...props,
      });
    }

    // ✅ Normal button (ref works here)
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };