import React from "react";
import { Calculator } from "./component/Button";

export class App extends React.Component {
  render() {
    return (
      <div className="bg-slate-300 h-screen flex justify-center items-center gap-6 flex-col  ">
        <Calculator />
      </div>
    );
  }
}
