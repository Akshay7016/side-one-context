import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";


const Agents = () => {
  return(
    <Agent1 />
  );
}

const Agent1 = () => {
  return(
    <Agent2 />
  );
}

const Agent2 = () => {
  return(
    <Agent3 />
  );
}

const Agent3 = () => {
  return(
    <JamesBond />
  );
}

const JamesBond = () => {
  return(
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h2>Agent Information</h2>
            <h5>Mission name: {context.data.mname}</h5>
            <h5>Mission code: {context.data.agent}</h5>
            <h5>Mission status: {context.data.accept}</h5>

            <button onClick={context.isMissionAccepted}>Click here to Accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  );
}


const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
}

export default App;