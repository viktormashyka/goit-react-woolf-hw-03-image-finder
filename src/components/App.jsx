import React, { Component } from 'react';
import { fetchImageByName } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    pages: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await fetchImageByName(this.state.query);
        console.log(`response.hits: ${hits}, response.totalHits: ${totalHits}`);

        if (hits.length === 0) {
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }

        if (this.state.page === 1) {
          this.setState({ pages: totalHits });
        }

        this.setState({
          images: hits,
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }

    if (prevState.page !== this.state.page) {
      try {
        this.setState({ isLoading: true });
        const { hits, totalHits } = await fetchImageByName(
          this.state.query,
          this.state.page
        );
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  onSubmit = search => {
    this.setState({ query: search, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error, page, pages } = this.state;
    console.log('state: ', this.state);
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {!isLoading && !error && images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </div>
    );
  }
}

export { App };
