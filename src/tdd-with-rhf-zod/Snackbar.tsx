import { useEffect } from "react";

type Props = {
  message: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Snackbar: React.FC<Props> = ({ message, isOpen, setOpen }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [isOpen, setOpen]);

  if (!isOpen) {
    return null;
  }

  return <div role="alert">{message}</div>;
};
