import { useState } from 'react';
import { GalleryModal } from 'components/Modal/Modal';
import { ImageGalleryItem, ItemImg } from './GalleryItem.styled';


export const  GalleryItem = ({image,}) => {
  const [modalOpen, setModalOpen] = useState(false)
  
  const openModal = () => {
    setModalOpen(
       true
    );
  };
  const closeModal = () => {
    setModalOpen(
      false
    );
  };

   
    return (
      <ImageGalleryItem>
        <ItemImg src={image.webformatURL} alt="" onClick={openModal} />
        <GalleryModal
          image={image}
          isOpen={modalOpen}
          onRequestClose={closeModal}
        />
      </ImageGalleryItem>
    );
  
}
