// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Media from 'components/Media';
import EditButton from 'components/buttons/EditButton';
import HomeButton from 'components/buttons/HomeButton';
import TableOfContents from 'components/TableOfContents';

const TopMenu = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  justify-content: space-evenly;
`;

const TOCWrapper = styled.div`padding: 1rem 2rem;`;

const SidebarBody = styled.nav`
  background-color: white;
  width: 100%;
`;

const Sidebar = props => {
  return (
    <SidebarBody>
      <Media query={'desktop'}>
        {isDesktop =>
          isDesktop
            ? null
            : <TopMenu>
                <HomeButton />
                <EditButton to={'#'} />
              </TopMenu>}
      </Media>
      <TOCWrapper>
        <TableOfContents
          {...props}
          onCloseTableOfContentsClick={props.onCloseSidebarClick}
        />
      </TOCWrapper>
    </SidebarBody>
  );
};

Sidebar.defaultProps = {
  glossary: [],
  tableOfContents: [],
};

Sidebar.propTypes = {
  glossary: PropTypes.array.isRequired,
  onCloseSidebarClick: PropTypes.func.isRequired,
  tableOfContents: PropTypes.array.isRequired,
};

export default Sidebar;
