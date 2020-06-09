import React from 'react';
import {
  StyledNavBar, StyledList, StyledTitle, StyledNavBarContainer,
} from './style';
import ListItem, { ListItemProps } from './components/StyledListItem/ListItem';


export interface NavBarHorizontalProps {

}


const NavBarHorizontal: React.SFC<NavBarHorizontalProps> = () => {
  const items: ListItemProps[] = [{ label: 'Item 1', subItens: ['sub1', 'sub2'] }, { label: 'Item 1' }, { label: 'Item 1' }];
  return (
    <>

      <StyledNavBar>
        <StyledNavBarContainer>

          <StyledTitle>
            Title
          </StyledTitle>
          <StyledList>
            {items.map((item) => <ListItem label={item.label} subItens={item.subItens ? item.subItens : []} />)}
          </StyledList>
        </StyledNavBarContainer>

      </StyledNavBar>
    </>
  );
};

export default NavBarHorizontal;
