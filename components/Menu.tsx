import * as React from 'react';
import { ListItem, Icon } from '@rneui/themed';

const Menu = () => {
  return (
    <>
      <ListItem>
        <Icon name="inbox" type="material-community" color="grey" />
        <ListItem.Content>
          <ListItem.Title>Inbox</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem>
        <Icon name="trash-can-outline" type="material-community" color="grey" />
        <ListItem.Content>
          <ListItem.Title>Trash</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </>
  );
};

export default Menu;
