import React from 'react';

import Display from '../display/Display';
import Controls from '../controls/Controls';
import styled from 'styled-components';

var Y = styled.div`margin: 0 auto; margin-top: 18%; max-width:240px;`

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false,
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <Y>
        <Display 
          locked={locked} 
          closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </Y>
    );
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  };

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  };
}

export default Dashboard;
