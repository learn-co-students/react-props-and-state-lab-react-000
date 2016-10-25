const React = require('react');
const ReactDOM = require('react-dom');
require('./fetch-setup');

const App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

fetch('/api/pets').then(res => console.log(res))

require('./test/index-test.js'); // Leave this in!
