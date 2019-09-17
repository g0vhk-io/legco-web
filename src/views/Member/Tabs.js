import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import getMember, { news, voteHistory } from 'api/member';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Votes from './Votes';
import Speech from './Speech';

function Member({ history, match, id }) {
  console.log(match);
  const [ activeTab, setActiveTab ] = useState({});
  const { url } = match;
  return (
    <>
      <div className="bg-white">
        <Nav tabs styles={{ width: '100%'}}>
          <NavItem>
            <Link exact to={url}>
              <NavLink to={url}>投票</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link exact to={`${url}/speech`}>
              <NavLink exact to={`${url}/speech`}>發言</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="#">質詢</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">新聞</NavLink>
          </NavItem>
        </Nav>
      </div>
      <Switch>
        <Route exact path={url} name="投票" render={Votes} />
        <Route exact path={`${url}/speech`} name="發言" render={Speech} />
      </Switch>
    </>
  );
}

export default withRouter(Member);
