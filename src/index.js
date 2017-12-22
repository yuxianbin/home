import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider} from 'antd'
import 'antd/dist/antd.less'

import Index from './views/index'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<LocaleProvider><Index /></LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
