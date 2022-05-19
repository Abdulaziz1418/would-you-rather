import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Menu,
  Image,
  Button,
  Container
} from 'semantic-ui-react';
import { setAuthUser } from '../actions/authUser';

class Nav extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { authUser, users } = this.props;

    return (
      <Container style={{width: 'auto'}}>
          <Fragment>
        <Menu pointing secondary>
          <Menu.Item name="home" as={NavLink} to="/" exact color='blue' />
          <Menu.Item name="new question" as={NavLink} to="/add" color='blue'/>
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" color='blue'/>
          <Menu.Menu position="right">
            <Menu.Item>
            { authUser !== null ? (
              <span>
              {'Hello, '+users[authUser].name}
                <Image
                  src={users[authUser].avatarURL}
                  avatar
                  spaced="left"
                  verticalAlign="bottom"
                />
              </span>
            ) : (
                <span></span>
            )
  }
            </Menu.Item>
            <Menu.Item>
            { authUser !== null ? (
              <Button
                content="Logout"
                labelPosition="right"
                compact
                icon="log out"
                size="mini"
                color='red'
                onClick={this.handleLogout}
              />
            ) : null
            }
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        </Fragment>
      </Container>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    users
  };
}

export default connect(
  mapStateToProps,
  { setAuthUser }
)(Nav);