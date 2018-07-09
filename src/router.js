import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider} from 'antd';

// dynamic.setDefaultLoadingComponent(() => {
//   return <Spin size="large"  />;
// });
const Routers =function RouterConfig({ history, app }) {
  const menuGlobal=[
    {
        path: '/table',
        // models: () => [import('./models/aaa')], //models可多个
        component: () => import('./routes/table'),
    } ,
  {
    path: '/aaa',
    // models: () => [import('./models/aaa')], //models可多个
    component: () => import('./routes/AAA'),
} 
  ];
  return (
    <LocaleProvider locale={zhCN}>
    <Router history={history}>
      <Switch>
        {
          menuGlobal.map(({path,...dynamics},index)=>(
            <Route
              key={index} 
              path={path} 
              exact 
              component={dynamic({
                app,
                ...dynamics
              })} 
            />
          ))
        }
      </Switch>
    </Router>
     </LocaleProvider>
  );
}
 
export default Routers;
