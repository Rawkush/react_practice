import React, { Component } from "react";
class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      recievedProps: "",
    };

    console.log(this.props);
  }

  componentDidMount = () => {
    //? append list if it

    this.setState(
      {
        list: this.props.location.data,
      },
      () => {
        console.log(this.state.list);
      }
    );
  };

  modifyData = (myIndex) => {
    console.log("list: id for modify is ", myIndex);
    console.log("list: state", this.state.list);
    const newList = this.state.list.filter((item) => item.index !== myIndex);
    this.setState(
      {
        list: newList,
      },
      () => {
        this.props.history.push({
          pathname: "/add",
          data: this.state.list,
          index: myIndex,
        });
      }
    );
  };

  deleteData = (index) => {
    console.log("list: id for delete is ", index);
    const newList = this.state.list.filter((item) => item.index !== index);
    this.setState(
      {
        list: newList,
      },
      () => {
        console.log("list: deleted");
      }
    );
  };

  render() {
    return (
      <div className="parent">
        <div className="container">
          <div className="data">
            {this.state.list &&
              this.state.list.map((data) => {
                return (
                  <div key={data.index}>
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
                    <button
                      type="buttom"
                      onClick={() => this.modifyData(data.index)}
                      className="btn btn-primary"
                    >
                      modify data
                    </button>
                    <button
                      type="button"
                      onClick={() => this.deleteData(data.index)}
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="controller"></div>
        </div>
      </div>
    );
  }
}

export default ListToDo;
