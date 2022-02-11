import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ListRouterClient from "../routes/ListRouterClient";
function ClientLayout() {
  return (
    <div>
      <Navbar />
      <Switch>
        {ListRouterClient.map((listroute, idx) => {
          return (
            listroute.component && (
              <Route
                key={idx}
                path={listroute.path}
                exact={listroute.exact}
                name={listroute.name}
                render={(props) => (<listroute.component {...props} />)}
              />
            )
          );
        })}
        <Redirect from="admin" to="/admin/dashboard" />
      </Switch>
      <Footer />
    </div>
  );
}
export default ClientLayout;
