import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";

interface ImageModalProps {
  imgModal: boolean;
  onModalClose: () => void;
  image: string;
  imgLikes: number | null;
  user: string | null;
}

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  imgModal,
  onModalClose,
  image,
  imgLikes,
  user,
}) => {
  return (
    <div>
      <Modal
        className={css.container}
        isOpen={imgModal}
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <img className={css.img} src={image} alt="modal" />
        <div className={css.textWrapper}>
          <GrInstagram
            className={css.inst}
            size="50"
            color="rgb(81, 88, 212)"
          />
          <ul className={css.list}>
            <li className={css.item}>
              <FaUserAlt color="rgb(81, 88, 212)" size="30" />
              <p className={css.text}>{user}</p>
            </li>
            <li className={css.item}>
              <FcLike size="30" />
              <p className={css.text}>{imgLikes}</p>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;