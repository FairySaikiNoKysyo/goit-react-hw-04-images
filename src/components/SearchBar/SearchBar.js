import { useState } from 'react';
import { Form, FormOverlay, SearchBtn, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = evt => {
    setInputValue(evt.target.value.toLowerCase().trim());
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue === '') {
      alert('Please tell us about your image');
      return;
    }

    onSubmit(inputValue);
  };

  return (
    <FormOverlay>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          value={inputValue}
          onChange={handleInput}
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
};
