import React, { useEffect, useState } from 'react';
import { Message } from '@enix/api-interfaces';
import styled from 'styled-components';
import axios from 'axios';
import faker from 'faker';

const Centre = styled.div`
  text-align: center;
`;

interface AppProps {
  name: string;
}
class App extends React.PureComponent<AppProps> {
  sendMessage() {
    const name = faker.name.findName();
    console.log(name);
    axios({
      url: 'http://localhost:3333/api',
      method: 'POST',
      data: {
        name
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <Centre>
          <h1>Welcome</h1>
          <button onClick={this.sendMessage}>Send Message</button>
        </Centre>
      </React.Fragment>
    );
  }
}

export default App;
