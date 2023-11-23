import { Component } from 'react';
import { GalleryModal } from 'components/Modal/Modal';
import { ImageGalleryItem, ItemImg } from './GalleryItem.styled';
// = ({image}) =>

export class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <ImageGalleryItem>
        <ItemImg src={this.props.image.webformatURL} alt="" onClick={this.openModal} />
        <GalleryModal
          image={this.props.image}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
        />
      </ImageGalleryItem>
    );
  }
}
