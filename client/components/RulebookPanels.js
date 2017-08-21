// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RulebookContent from 'components/RulebookContent';
import Sidebar from 'components/Sidebar';
import styled from 'styled-components';

const Panel = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.offset};
  bottom: 0;
  overflow-y: auto;
  width: ${props => props.width || 'auto'};
`;

class RulebookPanels extends Component {
  state: {
    sidebarOffset: number,
    sidebarWidth: number,
    sidebarUnit: string,
  };

  constructor(props) {
    super(props);

    this.state = {
      sidebarOffset: 300,
      sidebarWidth: 300,
      sidebarUnit: 'px',
    };
  }

  calculateSidebarWidth(): string {
    return this.state.sidebarWidth + this.state.sidebarUnit;
  }

  calculateSidebarOffset(): string {
    const offsetValue = this.state.sidebarOffset - this.state.sidebarWidth;
    return offsetValue + this.state.sidebarUnit;
  }

  calculateContentOffset(): string {
    const offsetValue = this.state.sidebarOffset;
    return offsetValue + this.state.sidebarUnit;
  }

  render() {
    return (
      <div>
        <Panel
          offset={this.calculateSidebarOffset()}
          width={this.calculateSidebarWidth()}
        >
          <Sidebar tableOfContents={this.props.data.toc} />
        </Panel>
        <Panel offset={this.calculateContentOffset()}>
          <RulebookContent
            attributes={this.props.data.front_matter}
            markdown={this.props.data.markdown}
          />
        </Panel>
      </div>
    );
  }
}

RulebookPanels.propTypes = {
  data: PropTypes.shape({
    front_matter: PropTypes.object.isRequired,
    markdown: PropTypes.array.isRequired,
    toc: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default RulebookPanels;
