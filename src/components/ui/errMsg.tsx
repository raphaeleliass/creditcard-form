import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ErrMsgProps extends ComponentProps<"p"> {}

function ErrMsg({ className, ...props }: ErrMsgProps) {
  return (
    <p
      className={cn(
        "rounded-md bg-red-100 px-3 font-semibold py-1 text-xs text-red-500",
        className,
      )}
      {...props}
    />
  );
}

export default ErrMsg;
