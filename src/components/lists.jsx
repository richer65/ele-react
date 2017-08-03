import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import {Link} from 'react-router'

const styleSheet = createStyleSheet('SimpleList', theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
}));

function SimpleList(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link to="/Test1">Test1</Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Link to="/Test2">Test2</Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Link to="/testRedux">testRedux</Link>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleList);