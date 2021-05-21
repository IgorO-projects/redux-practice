
import { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';

const AsyncHomeView = lazy(()=> import('./views/Homeview.js'));
const AsyncCounter = lazy(()=> import('./components/Counter'));


function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route exact path="/" component={AsyncHomeView} />
            <Route exact path="/counter" component={AsyncCounter} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
