import React from 'react';

import styled from 'styled-components';

export const Testing = () => {
  return (
    <Wrapper>
      <h3>hello wolrd</h3>
      <p>hello people</p>
      <div className="article">
        <p>this is article</p>
      </div>
      <button>click me</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  .article {
    p {
      color: green;
    }
  }
`;
