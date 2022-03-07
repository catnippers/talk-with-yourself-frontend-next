import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import styles from './Modal.module.scss';
import { getModalInfo, hideModal } from '../../store/mainSlice';

type ModalActions = {
  readonly onAccept?: () => void;
};

export const Modal = memo<ModalActions>(({ onAccept }) => {
  const modal = useSelector(getModalInfo);
  const dispatch = useDispatch();

  const handleModalAccept = () => {
    dispatch(hideModal());
    if (onAccept) {
      onAccept();
    }
  };

  if (!modal.show) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <section className={styles.window}>
        <Image
          width={72}
          height={72}
          alt={modal.type}
          className={styles.icon}
          src={`/icons/modal/${modal.type}.svg`}
        />

        <div className={styles.info}>{modal.message}</div>

        <div className={styles.button}>
          <button className={styles.ok} onClick={handleModalAccept}>
            Continue
          </button>
        </div>
      </section>
    </div>
  );
});

Modal.displayName = 'Modal';