import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import ListRouterAdmin from '../routes/ListRouterAdmin'
import '../assets/js/scripts'
const AdminLayout = ()=>{
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {ListRouterAdmin.map((route,idx)=>{
                                return (
                                    route.component && (
                                        <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={(props)=>(
                                            <route.component {...props} />
                                        )} 
                                        />
                                    )
                                )
                            })}
                            <Redirect from="admin" to="/admin/dashboard" />
                        </Switch>
                    </main>
                    
                </div>
            </div>

        </div>
    )
}
export default AdminLayout