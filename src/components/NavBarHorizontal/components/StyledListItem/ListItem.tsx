import React, { useState } from 'react';
import { StyledListItem, StyledSubList, StyledSubListItem } from './style';


export interface ListItemProps {
  subItens?: string[] | undefined,
  label: string
}

const ListItem: React.SFC<ListItemProps> = ({ subItens, label }) => {
  const [subList, setSublist] = useState(true);
  // const subItens: string[] = ['Sub 1', 'Sub2', 'Sub3'];

  return (
    <>
      <StyledListItem onClick={() => setSublist((current) => !current)}>
        <span>{label}</span>
        {subList && subItens ? (
          <StyledSubList>
            {subItens.map((item) => <StyledSubListItem>{item}</StyledSubListItem>)}
          </StyledSubList>
        ) : null}
      </StyledListItem>

    </>
  );
};

ListItem.defaultProps = {
  subItens: [],
};

export default ListItem;
