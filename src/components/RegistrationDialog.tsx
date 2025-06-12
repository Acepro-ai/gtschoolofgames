
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  buttonText 
}: RegistrationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          size={size} 
          className={triggerClassName}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px] max-h-[240px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-center">Register for Free Masterclass</DialogTitle>
        </DialogHeader>
        <div className="h-[70vh] overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://webinar.zoho.com/meeting/register/embed?sessionId=1092661401" 
            frameBorder="0"
            className="rounded-md"
            title="Zoho Webinar Registration"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
