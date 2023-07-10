import React, { Suspense, useState } from 'react';
import { StyledDiv } from './MessageStyles';
import { loadable } from '../../loadable';
const Form = loadable(() => import(/* webpackChunkName: "Form" */'../Form/Form'));

const Messagelist: React.FC = () => {
  const DummyList: string[] = [];
  const [messageList, updateMessageList] = useState<string[]>(DummyList);

  const addMessage = (message: string) => {
    updateMessageList([...messageList, message]);
  };

  return (
    <div>
      {messageList?.map((message, index) => {
          return (
            <StyledDiv key={index}>
              {message}
            </StyledDiv>
          );
        })}
        <Suspense fallback={<div>loading..</div>}>
      <Form addMessageHandler={addMessage} />
      </Suspense>
    </div>
  );
};

export default Messagelist;
