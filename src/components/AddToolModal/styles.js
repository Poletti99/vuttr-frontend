import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  & > input,
  textarea {
    height: 50px;
    width: 500px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 5px;
    padding-right: 20px;
  }

  & > textarea {
    height: 100px;
    padding-right: 5px;
  }

  & > label {
    margin-top: 20px;
  }

  & > button {
    height: 40px;
    margin-top: 20px;
    background: #365df0;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
  }

  & > span {
    color: #f00;
  }
`;
