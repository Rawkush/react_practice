import React, { Component } from "react";
import { useHistory } from "react-router-dom";
class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.modifyData = this.modifyData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      list: [
        {
          whatToDo: "stuff",
          place: "delhi",
          time: "12",
          notes: "notes",
        },
        {
          whatToDo: "stuff",
          place: "delhi",
          time: "12",
          notes: "notes",
        },
      ],

      recievedProps: "",
    };

    console.log(this.props);
  }

  componentDidMount() {
    this.setState(
      {
        recievedProps: this.props.location.data,
      },
      () => {
        console.log(this.state.recievedProps);
      }
    );
  }

  modifyData(index) {
    console.log("id for modify is ", index);
    alert("need to redirect to add page");
    //  const history = useHistory();
    //  history.push("/modify");
    // this.props.history.push("/modify");
  }

  deleteData(index) {
    console.log("id for delete is ", index);
    this.props.deleteData(index);
  }

  render() {
    return (
      // <div className="parent">
      //   <div className="container">
      //     <div className="data">
      //       {
      //         //list
      //         this.props.list.map((data) => {
      //           return (
      //             <div key={data.index}>
      //               <div className="dataContainer">
      //                 <div>
      //                   <span>What to do </span> <span> {data.whatToDo}</span>
      //                 </div>
      //                 <div>
      //                   <span>place</span> <span> {data.place}</span>
      //                 </div>
      //                 <div>
      //                   <span>notes</span> <span> {data.notes}</span>
      //                 </div>
      //                 <div>
      //                   <span>time</span> <span> {data.time}</span>
      //                 </div>
      //               </div>
      //               <button
      //                 type="buttom"
      //                 onClick={() => this.modifyData(data.index)}
      //                 className="btn btn-primary"
      //               >
      //                 modify data
      //               </button>
      //               <button
      //                 type="button"
      //                 onClick={() => this.deleteData(data.index)}
      //                 className="btn btn-danger"
      //               >
      //                 delete
      //               </button>
      //             </div>
      //           );
      //         })
      //       }
      //     </div>
      //     <div className="controller"></div>
      //   </div>
      // </div>

      <div>
        <div>
          <h1>hello child</h1>
        </div>
      </div>
    );
  }
}

export default ListToDo;
