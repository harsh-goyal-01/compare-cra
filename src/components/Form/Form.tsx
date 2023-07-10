import React, { useRef, FormEvent } from 'react';
import { StyledButton,StyledForm,StyledInput } from './FormStyles';
interface FormProps {
  addMessageHandler: (message: string) => void;
}

const Form: React.FC<FormProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const message = inputRef.current.value;
      props.addMessageHandler(message);
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmitHandler}>
        <StyledInput type='text' placeholder='Enter Your Message' ref={inputRef} />
        <StyledButton>Send</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Form;
