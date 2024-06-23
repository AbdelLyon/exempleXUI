"use client";
import { XuiModal } from "@xefi/xui/modal";
import { XuiButtonsModal } from "@xefi/xui/button";

const ModalComponent = ({
  trigger,
  handleClose,
  isOpen,
}: {
  trigger: () => JSX.Element;
  handleClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <XuiModal
      isBackdrop
      actionButtons={() => (
        <XuiButtonsModal
          buttonActionContent="Confirmer"
          buttonCloseContent="Annuler"
          onAction={() => {}}
          onClose={handleClose}
        />
      )}
      isOpen={isOpen}
      title="Titre"
      transitions={{
        enter: "lks",
      }}
      trigger={trigger}
      onClose={handleClose}
    >
      <p className="mt-2 text-sm/6">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>
    </XuiModal>
  );
};

export default ModalComponent;
