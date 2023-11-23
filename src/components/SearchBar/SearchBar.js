import { Component } from 'react';
import { Form, FormOverlay, SearchBtn, SearchInput } from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    inputValue: '',
    page: 1,
  };
  handleInput = evt => {
    this.setState({
      inputValue: evt.target.value.toLowerCase().trim(),
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.inputValue === '') {
      alert('Please tell us about your image');
      return;
    }

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <FormOverlay>
        <Form onSubmit={this.handleSubmit}>
          <SearchInput
            value={this.state.inputValue}
            onChange={this.handleInput}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
      </FormOverlay>
    );
  }
}
