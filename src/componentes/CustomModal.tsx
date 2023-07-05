import Modal, { ModalProps } from "@mui/material/Modal";

export function CustomModal({ children, ...rest }: ModalProps) {
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...rest}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </Modal>
  );
}
