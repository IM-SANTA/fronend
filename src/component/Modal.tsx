import { createContext, useContext, useState } from 'react';
import Layout from '../pages/Layout';

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProps {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps | null>(null);

const Modal = ({ children, ...props }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {isOpen && <div {...props}>{children}</div>}
    </ModalContext.Provider>
  );
};

const ModalButton = ({ children, ...props }: ModalProps) => {
  const { setIsOpen } = useContext(ModalContext) ?? {};

  const handleClick = () => {
    setIsOpen?.(true);
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

const ModalContents = ({ children, ...props }: ModalProps) => {
  const { isOpen } = useContext(ModalContext) ?? {};

  if (!isOpen) return null;
  return <Layout {...props}>{children}</Layout>;
};

Modal.OpenButton = ModalButton;
Modal.Contents = ModalContents;

export default Modal;
