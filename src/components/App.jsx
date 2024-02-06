import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import React, { Component } from 'react';
import { fetchImageByName } from 'api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
  };

  onSubmit = async search => {
    this.setState({ query: search, isLoading: true });
    // this.setState({ isLoading: true });
    try {
      const response = await fetchImageByName(this.state.query);
      this.setState({
        images: response,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await fetchImageByName(this.state.query);
      this.setState({
        images: response,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  async componentDidUpdate() {
    this.setState({ isLoading: true });
    try {
      const response = await fetchImageByName(this.state.query);
      this.setState({
        images: response,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    console.log('this.state: ', this.state);
    const { images, isLoading, error } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {images.length > 0 && <ImageGallery images={images} />}
      </div>
    );
  }
}

export { App };
