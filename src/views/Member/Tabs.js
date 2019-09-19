import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Votes from './Votes';
import Speech from './Speech';

function Member({ history, match, id }) {
  const { url } = match;
  const isActive = url => !!(url === history.location.pathname);
  return (
    <>
      <div className="bg-white">
        <Nav tabs styles={{ width: '100%'}}>
          <NavItem>
            <Link to={url}>
              <NavLink
                exact
                to={url}
                active={isActive(url)}
              >
                投票
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/speech`}>
              <NavLink
                exact
                to={`${url}/speech`}
                active={isActive(`${url}/speech`)}
              >
                發言
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/questions`}>
              <NavLink
                exact
                to={`${url}/questions`}
                active={isActive(`${url}/questions`)}
              >
                質詢
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to={`${url}/news`}>
              <NavLink
                exact
                to={`${url}/news`}
                active={isActive(`${url}/news`)}
              >
                新聞
              </NavLink>
            </Link>
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
