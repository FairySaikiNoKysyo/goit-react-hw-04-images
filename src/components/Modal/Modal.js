import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');  

export const GalleryModal = ({isOpen, onRequestClose, image}) => {
    return (
        < Modal 
            isOpen = { isOpen }            
            onRequestClose = { onRequestClose } 
            style = { customStyles } > 
            <img src={image.largeImageURL} alt="" width="640"/>             
        </Modal> 
    )
};