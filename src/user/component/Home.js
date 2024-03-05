// // constructor() lifecycle method
// import React, { Component } from 'react'

// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             count: prevState.count + 1
//         }));
//     }
//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.handleClick}>Increment</button>
//             </div>
//         )
//     }
// }


// componentDidMount


// import React, { Component } from 'react'

// export default class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {favoritefood: "pizz"};
//       }

//       componentDidMount() {
//         setTimeout(() => {
//           this.setState({favoritefood: "rice"})
//         }, 1000)
//       }
//   render() {
//     return (
//       <div>
//          <h1>My Favorite food is {this.state.favoritefood}</h1>
//       </div>
//     )
//   }
// }


// The `shouldComponentUpdate()` lifecycle method

// import React, { Component } from 'react'

// export default class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { favoriteFood: 'rice' };
//     }

//     shouldComponentUpdate( nextState) {
//         // Only re-render if the favoriteFood state has changed
//         return this.state.favoriteFood !== nextState.favoriteFood;
//     }

//     changeFood = () => {
//         this.setState({ favoriteFood: 'Pizza' });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My Favorite Food is {this.state.favoriteFood}</h1>
//                 <button type="button" onClick={this.changeFood}>Change food</button>

//             </div>
//         )
//     }
// }


// The componentWillUpdate() lifecycle method

// import React, { Component } from 'react'

// export default class Home extends Component {

//     state = {
//         count: 0,
//     };

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     componentWillUpdate(nextProps, nextState) {
//         if (nextState.count !== this.state.count) {
//             console.log(`Count is about to update from ${this.state.count} to ${nextState.count}.`);
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button type="button" onClick={this.handleClick}>
//                     Increment
//                 </button>
//             </div>
//         )
//     }
// }

// The componentDidUpdate lifecycle method

// import React, { Component } from 'react'

// export default class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//           count: 0
//         };
//       }

//       componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count) {
//           console.log('Count has been updated:', this.state.count);
//         }
//       }

//       handleClick() {
//         this.setState(prevState => ({
//           count: prevState.count + 1
//         }));
//       }
//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.handleClick()}>Increment</button>
//       </div>
//     )
//   }
// }


//The `getSnapshotBeforeUpdate` lifecycle method

// import React, { Component } from 'react'

// export default class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { favoritefood: "rice" };
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({ favoritefood: "pizza" })
//         }, 1000)
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         document.getElementById("div1").innerHTML =
//             "Before the update, the favorite was " + prevState.favoritefood;
//     }
//     componentDidUpdate() {
//         document.getElementById("div2").innerHTML =
//             "The updated favorite food is " + this.state.favoritefood;
//     }
//     render() {
//         return (
//             <div>
//                 <h1>My Favorite Food is {this.state.favoritefood}</h1>
//                 <div id="div1"></div>
//                 <div id="div2"></div>

//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export default class Home extends Component {

    state = {
        showChild: true,
    };

    handleDelete = () => {
        this.setState({ showChild: false });
    };
    render() {
        const { showChild } = this.state;
        return (
            <div>
                {showChild && <Child />}
                <button type="button" onClick={this.handleDelete}>
                    Delete Header
                </button>
            </div>
        )
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert('remove hedare');
    }

    render() {
        return <h1>Hello World!</h1>;
    }
}







