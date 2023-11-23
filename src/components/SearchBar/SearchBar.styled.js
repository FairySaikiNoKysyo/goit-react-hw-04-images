import styled from "styled-components";

export const FormOverlay = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;  
  padding: 12px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  border-radius: 6px;  
  overflow: hidden;  
`
export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  padding-left: 8px;
  padding-right: 4px; 
  border: none;
  border-radius: 4px;
  outline: none; 

  &::placeholder {
    font-size: 18px;
  }
`
export const SearchBtn = styled.button`
  width: 100px;
  height: 28px; 
  color:  #3f51b5; 
  border: 0;
  border-radius: 6px;     
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none; 

  &:hover{
    opacity: 1; 
  }
`