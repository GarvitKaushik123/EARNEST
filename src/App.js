import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RealEstate from './components/RealEstate/RealEstate';
import Welcome from './components/Welcome/Welcome'
import NotFound from './components/NotFound/NotFound'
import Bid from './components/Bid/Bid';
import CrowdFunding from './components/CrowdFunding/CrowdFunding';
import Tender from './components/Tender/Tender';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Welcome/>
            </Route>
            <Route path="/RealEstate">
             <RealEstate/>
            </Route>
            <Route path="/Bid">
              <Bid></Bid>
            </Route>
            <Route path="/Crowdfunding">
              <CrowdFunding></CrowdFunding>
            </Route>
            <Route path="/Tender">
              <Tender></Tender>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
