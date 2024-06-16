"use client";
import { useState } from "react";
import { XuiModal } from "@xefi/xui/modal";
import { XuiButton, XuiButtonsModal } from "@xefi/xui/button";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <XuiModal
      isBackdrop
      actionButtons={() => (
        <XuiButtonsModal
          buttonActionContent="Confirmer"
          buttonCloseContent="Annuler"
          onAction={() => console.log("action")}
          onClose={() => setIsOpen(false)}
        />
      )}
      isOpen={isOpen}
      title="Titre"
      transitions={{
        enter: "lks",
      }}
      trigger={() => (
        <XuiButton onClick={() => setIsOpen(true)}>Open dialog</XuiButton>
      )}
      onClose={() => setIsOpen(false)}
    >
      <p className="mt-2 text-sm/6">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>
    </XuiModal>
  );
};

export default ModalComponent;
