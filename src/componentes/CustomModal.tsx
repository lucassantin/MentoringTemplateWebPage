import Modal, { ModalProps } from  '@mui/material/Modal';
interface ICustomModalProps extends ModalProps {
  children: React.ReactElement;
}
export function CustomModal({children, ...rest}:ICustomModalProps){
  return(
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...rest}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </Modal>
  )
}