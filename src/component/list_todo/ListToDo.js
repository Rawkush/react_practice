import React, { Component } from "react";
class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { whatToDo: "stuff", place: "delhi", time: "12", notes: "notes" },
        { whatToDo: "stuff", place: "delhi", time: "12", notes: "notes" },
      ],
    };
  }

  // to access this.props.l

  render() {
    return (
      <div className="parent">
        <div className="container">
          <div className="data">
            {
              //list
              this.state.list.map((data) => {
                return (
                  <div>
                    <div className="dataContainer">
                      <div>
                        <span>What to do </span> <span> {data.whatToDo}</span>
                      </div>
                      <div>
                        <span>place</span> <span> {data.place}</span>
                      </div>
                      <div>
                        <span>notes</span> <span> {data.notes}</span>
                      </div>
                      <div>
                        <span>time</span> <span> {data.time}</span>
                      </div>
                    </div>
                    <button type="buttom" className="btn btn-primary">
                      modify data
                    </button>
                    <button type="button" className="btn btn-danger">
                      delete
                    </button>
                  </div>
                );
              })
            }
          </div>
          <div className="controller"></div>
        </div>
      </div>
    );
  }
}

export default ListToDo;
