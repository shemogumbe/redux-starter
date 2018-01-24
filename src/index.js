import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Results from './components/Results';

import { createStore } from 'redux';
import myApp from './reducers';

let store = createStore(myApp);

ReactDOM.render(
<div>
<App store={store}/>
<Results store={store} /> 
</div>, document.getElementById('root'));
registerServiceWorker();
    
