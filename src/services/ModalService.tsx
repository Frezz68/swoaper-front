// ModalService.tsx
import React, { useState } from "react";
import "./ModalService.scss";

interface ModalServiceProps {
  children: (openModal: (content: React.ReactNode) => void) => React.ReactNode;
}

const ModalService: React.FC<ModalServiceProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  return (
    <div>
      {children(openModal)}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <span className="material-icons leave" onClick={closeModal}>
              close
            </span>
            <div className="modal-content-centered">{modalContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalService;
