import styles from './modal.module.scss';

export default function ModalLoading(){

    return(
        <div className={styles.modalContainer}>
            <div className={styles.loadingView}>Loading...</div>

        </div>



    );
}