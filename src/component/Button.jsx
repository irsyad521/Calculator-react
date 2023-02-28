import React from "react";

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  getInput = (event) => {
    this.setState({ input: this.state.input + event.target.value });
  };

  getHapus = () => {
    this.setState({ input: "" });
  };

  getDel = () => {
    let dataHasil = this.state.input;
    let panjang = dataHasil.length;
    let akhir = dataHasil.slice(0, panjang - 1);
    this.setState({ input: akhir });
  };

  getUbah(dataInput) {
    let array = dataInput.split("");
    let indexTerahir = array.pop();
    console.log(indexTerahir);
    return indexTerahir;
  }

  getOperasi = (event) => {
    let operasi = event.target.value;
    let dataInput = this.state.input;
    let hasil = this.getUbah(dataInput);

    if (hasil == "*" || hasil == "+" || hasil == "-" || hasil == "/") {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: this.state.input + operasi });
    }
  };

  getHasil = () => {
    let hasil = eval(this.state.input);
    this.setState({ input: hasil });
  };

  render() {
    return (
      <div className="w-96 h-96 bg-blue-500 flex flex-col gap-4 p-4 rounded-xl shadow-lg">
        <input type="text" className="w-full h-24 bg-slate-300 text-end text-3xl pr-4" value={this.state.input} disabled />
        <div className="w-full h-72 bg-orange-500 grid grid-cols-4 text-2xl">
          <button type="button" onClick={this.getHapus} className="border border-gray-900  hover:bg-yellow-300" value="AC">
            AC
          </button>
          <button type="button" onClick={this.getDel} className="border border-gray-900 hover:bg-yellow-300" value="DEL">
            DEL
          </button>
          <button type="button" onClick={this.getOperasi} className="border border-gray-900  hover:bg-yellow-300" value="/">
            :
          </button>
          <button type="button" onClick={this.getOperasi} className="border border-gray-900  hover:bg-yellow-300" value="*">
            *
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="9">
            9
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="8">
            8
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="7">
            7
          </button>
          <button type="button" onClick={this.getOperasi} className="border border-gray-900  hover:bg-yellow-300" value="-">
            -
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="6">
            6
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="5">
            5
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="4">
            4
          </button>
          <button type="button" onClick={this.getOperasi} className="border border-gray-900  hover:bg-yellow-300" value="+">
            +
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="3">
            3
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="2">
            2
          </button>
          <button type="button" onClick={this.getInput} className="border border-gray-900" value="1">
            1
          </button>
          <button type="button" onClick={this.getInput} id="angka" className="border border-gray-900" value=".">
            .
          </button>

          <button type="button" onClick={this.getInput} id="angka" className="border border-gray-900" value="00">
            00
          </button>

          <button type="button" onClick={this.getInput} id="angka" className="border border-gray-900" value="0">
            0
          </button>

          <button type="button" onClick={this.getHasil} id="hasil" className="border border-gray-900 grid-rows-none w-44  hover:bg-yellow-300" value="=">
            =
          </button>
        </div>
      </div>
    );
  }
}
