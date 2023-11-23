import { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from './Api/Api';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { MainContainer } from './MainContainer.styled';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    loadMore: 0,
  };
  async componentDidUpdate(_,prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true});
        const { query, page } = this.state;
        const { totalHits, hits } = await fetchImages(query, page);
        this.setState(prev => ({
          images: [...prev.images, ...hits],
          loadMore:  this.state.page < Math.ceil(totalHits / 12), 
        }));

        if (totalHits === 0) {
          toast.error(
            `Sorry, there are no images matching your search query. Please try again.`
          );
          this.setState({ loading: false });
        }
        if (page === 1) {
          toast.success(`Wohoo, we found ${totalHits} for you`);
        }
        if (page >= Math.ceil(totalHits / 12)) {
          toast('You`ve reached the end of search results.');
        }
      } catch (error) {
        this.setState({ error: true });
        toast.error('Error while fetching images. Please try again.');
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleChangeQuery = inputValue => {
    this.setState({
      query: inputValue,
      page: 1,
      images: [],
    });
    console.log('hello', this.state.query);
  };
  render() {
    const {images,loading,loadMore} = this.state;

    return (
      <MainContainer>
        <SearchBar onSubmit={this.handleChangeQuery} />
       {this.state.images.length > 0 && <ImageGallery images ={images}/>} 
       {loading && <Loader/>}
       {loadMore > 0 &&  <LoadMoreBtn onLoadMore={this.handleLoadMore}/>}
        <Toaster position="top-right" />
      </MainContainer>
    );
  }
}
