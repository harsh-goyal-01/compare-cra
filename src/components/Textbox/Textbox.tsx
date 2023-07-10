import React, { Suspense } from 'react';
import { StyledContainer,StyledHeading } from './TextboxStyles';
import { loadable } from '../../loadable';

const Messagelist = loadable(() => import(/* webpackChunkName: "Messagelist" */ '../Messagelist/Messagelist'));

const Textbox: React.FC = () => {
  return (
    <div>
      <StyledHeading>Chat App</StyledHeading>
      <StyledContainer>
        <Suspense fallback={<div>loading..</div>}>
          <Messagelist />
        </Suspense>
      </StyledContainer>
    </div>
  );
};

export default Textbox;
