import React, { useState } from "react";

// Hooks 이용
const UseState = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>The number is: {item}</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

// //class Component 이용
// class UseState_Class extends React.Component {
//   state = {
//     item: 1
//   }

//   // current를 사용하여 코드 간결화
//   incrementItem = () => {
//     this.setState(current => ({ item: current.item + 1 }));
//   }

//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       }
//     })
//   }

//   render() {
//     const { item } = this.state;

//     // this를 하면 UseState_Class 내부의 모든 요소를 object로 불러온다.
//     return (
//       <div>
//         <h1>The number is: {item}</h1>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.decrementItem}>Decrement</button>
//       </div>
//     )
//   }
// }


export default UseState;
