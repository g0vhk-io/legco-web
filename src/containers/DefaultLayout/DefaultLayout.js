import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';

import {
  AppAside,
  AppHeader,
  AppBreadcrumb2 as AppBreadcrumb,
  
} from '@coreui/react';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed style={{ background: 'rgb(60, 44, 70)'}}>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Suspense fallback={this.loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
