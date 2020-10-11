import React,{Component} from "react";
class Hello extends Component{
  constructor(props){
    super(props)
    this.state = {
      num: 0
    }
  }

  render() {
    return(
      <div>{this.state.num}S</div>
    )
  }

}

export default Hello
