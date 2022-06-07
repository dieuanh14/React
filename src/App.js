import logo from "./logo.svg";
import "./App.css";
import React from 'react';
// import Hello from "./Components/Hello";
// import { Hello2 } from "./Components/Hello2";
import {Navbar,NavbarBrand} from 'reactstrap';

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
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}




export default App;
