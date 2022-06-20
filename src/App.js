import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Comment from "./Components/Comment";
import Car from "./Components/Car";
import Count from "./Components/Count";
import Store from "./Components/Store";
import Stock from "./Components/Stock";
import Warning from "./Components/Warning";
import Welcome from "./Components/Welcome";
import { Form, Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./Components/MenuComponent";
import {DISHES} from "./Components/dish";
import MainComponent from "./Components/MainComponent";
// import Hello from "./Components/Hello";
// import { Hello2 } from "./Components/Hello2";

// function App() {
//   const data = { id: "1", name: "da" };
//   // const name = "da";
//   // const element = <h1>hello,{name}</h1>;
//   return (
//     <div className="App">
//       {/* <h1>Hello World!</h1>
//     //   <h1>{element}</h1>
//     //   <h1>hello{formatName(user)}</h1> */}
//       <Hello msg="em chan co" user={data} />
//       <Hello2 />
//     </div>
//   );
// }
// function formatName(user) {
//   return user.firstName + "" + " " + user.lastName;
// }
// const user = {
//   firstName: "DA",
//   lastName: "vt",
// };
// const element = <h1>hello{formatName(user)}</h1>;
// const comment1 = {
//   date: new Date(),
//   text: "I hope you enjoy my restaurant! ",
//   author: {
//     name: "alberto",
//     avatarUrl: "./images/alberto.png",
//   },
// };

// function App() {
//   return (
//     <div className="App">
//       {/* <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar> */}
//       {/* <Comment date={comment.date} text={comment.text} author={comment.author}/> */}
//       {/* <Count/> */}
//       {/* <Store/> */}
//       {/* <Stock/> */}
//       {/* <Warning/> */}
//       {/* <ul>{names}</ul> */}
//       {/* <Comment
//         date={comment1.date}
//         text={comment1.text}
//         author={comment1.author}
//       /> */}
//       {/* <Car/> */}
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu/>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props);
  //   this.state={
  //     dishes: DISHES
  //   };
  }

  render() {
    return(
      // <MenuComponent dishes={DISHES}/>
      <div className="App">
        <MainComponent/>
      </div>
    )
  }

}

export default App;
