import './App.css';
import {
  ProfileCardCollection 
 } from './ui-components';
 import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
 import {
  NavBarHeader2 
 } from './ui-components';
 import {
  MarketingFooter 
 } from './ui-components';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBarHeader2 />
      <ProfileCardCollection /> 
      </header>
      <footer className="App-footer">
      <MarketingFooter />
      </footer>
    </div>
  );
}

export default withAuthenticator(App)
