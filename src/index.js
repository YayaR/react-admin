
import dva from 'dva';
import './index.less';
import router from './router';
// import createHistory from 'history/createBrowserHistory'
 
// 1. Initialize
const app = dva();
 
// 2. Plugins
// app.use({});
 
// 3. Model
// app.model(require('./models/app').default);
 
// 4. Router
app.router(router);
 
// 5. Start

app.start('#root');