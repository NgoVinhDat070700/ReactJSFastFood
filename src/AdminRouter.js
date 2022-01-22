import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'

function AdminRouter({...rest}){
    return ( 
        <Route {...rest} render={props => <AdminLayout {...props} />} />
    )
}
export default AdminRouter