import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Comment from "./Components/Comment";
import { Form, Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./Components/MenuComponent";
import { DISHES } from "./Components/dish";
import MainComponent from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import Contactus from "./Components/Contactus";
import { Routes, Route } from "react-router";
import HomeComponent from "./Components/HomeComponent";
import HeaderComponennt from "./Components/HeaderComponennt";
import FooterComponent from "./Components/FooterComponent";
import 'flowbite';


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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderComponennt />
        {/* <MenuComponent /> */}
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route
            exact
            path="/menu"
            element={<MenuComponent dishes={this.state.dishes} />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    );
  }
}

export default App;
