
import Counter from "./Counter/Counter";
import { Header } from "./Header/Header";
import { Modal } from "./Modal/Modal";
import { Component } from "react";



class App extends Component {

  state = {
    isModalShown: false,
  }
 showModal = () => {
  this.setState(() => {
    return { isModalShown: true}
  })
 
 }

 closeModal = () => {
  this.setState(() => {
    return { isModalShown: false}
  })
}
  render() {
    return (
      <div>
      <Header isModalShown={this.showModal} isModalClosed={this.closeModal}/>
      <Counter/>
    {this.state.isModalShown && <Modal/>}

    </div>
    )
  }
    
  
}
export default App