import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../ui/button";

interface SuccessModalProps extends ComponentProps<"div"> {
  onClick: () => void;
}

function SuccessModal({ className, onClick, ...props }: SuccessModalProps) {
  return (
    <div
      className={cn(
        "fixed top-0 flex min-h-[100dvh] w-full items-center justify-center bg-black bg-opacity-75",
        className,
      )}
      {...props}
    >
      <div className="flex max-w-xs flex-col items-center justify-center space-y-8 rounded-xl bg-white px-12 py-12">
        <FaCheckCircle className="size-12 text-purple-600" />
        <h2 className="font-mono text-3xl font-bold">Success</h2>
        <p className="text-center">Your transaction has been successfully.</p>
        <Button
          className="bg-purple-600 font-sans hover:bg-purple-800"
          onClick={onClick}
        >
          OK
        </Button>
      </div>
    </div>
  );
}

export default SuccessModal;
