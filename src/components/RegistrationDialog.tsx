import React from "react";
import { Button } from "@/components/ui/button";

interface RegistrationDialogProps {
  triggerClassName?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  buttonText: string;
}

const RegistrationDialog = ({
  triggerClassName,
  variant = "outline",
  size = "lg",
  buttonText,
}: RegistrationDialogProps) => {
  const handleRedirect = () => {
    window.open("https://live.zoho.com/bvci-xrq-fyi", "_blank");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={triggerClassName}
      onClick={handleRedirect}
    >
      {buttonText}
    </Button>
  );
};

export default RegistrationDialog;
