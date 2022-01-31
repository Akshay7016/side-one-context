// import { useState } from 'react/cjs/react.development';
// import './App.css';

// const GrandChild = (props) => {

//   // Unnecessary use of props here. Because GrandChild is not using props but it is used by Child Component
//   return(
//     <div>
//       <h3>
//         Grandchild:
//       </h3>

//       <Child brand = {props.brand} />
//     </div>
//   );
// }

// const Child = (props) => {
//   return(
//     <div>
//       <h2>Child: {props.brand}</h2>
//     </div>
//   );
// }

// const App =() => {
//   const [brandname] = useState("Amazon");

//   return(
//     <div>
//       <h1>Hello</h1>
//       <GrandChild brand={brandname} />
//     </div>
//   );
// }

// export default App;