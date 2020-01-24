'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Hello React ---> Tutorial: 11. Events and Attributes [31.12.2019]
/* var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is my app info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
            <li>Item four</li>
        </ol>
    </div>
);

let count = 0;
const addOne = function() {
    console.log('addOne')
}
const minusOne = function () {
    console.log('minusOne')
}
const reset = function () {
    console.log('reset')
}
 const templateTwo = (
    <div>
        <h1>count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
 console.log(templateTwo)

//Challenge: 11. Events and Attributes
//created the minus one button and function 
//created the reset button and function 
 const appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot) */

//---------------------------------------------------------------------------------------------------------------------------

// Hello React ----> Tutorial: 12. Manual Data Binding.mp4 [01.01.2020]

/* var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is my app info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
            <li>Item four</li>
        </ol>
    </div>
);
 let count = 0;
const addOne = function() {
    count++ //or count + 1;
    renderCounterApp()
}
const minusOne = function () {
    count-- // or count -1;
    renderCounterApp();
}
const reset = function () {
    count = 0; //to reset
    renderCounterApp();
}
 const templateTwo = (
    <div>
        <h1>count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
 console.log(templateTwo) 
 const appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)
 const renderCounterApp = function() {
    const templateTwo = (
        <div>
            <h1>count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot)
}
//Challenge: 12. Manual Data Binding.mp4
// do minusOne and Reset */

// ---------------------------------------------------------------------------------------------------------------------------

//React Components ---> Tutorial: 11. Adding State to Counter App Part I [23.01.2020]

/* class Counter extends React.Component{
     render() {
        return (
            <div>
                <h1>Count: </h1>
                <button>+1</button>
                <button>-1</button>
                <button>reset</button>
            </div>
        )
    };
}
 const appRoot = document.getElementById('app')
ReactDOM.render(<Counter />, appRoot) */

//React Components ---> Challenge: 12. Adding State to Counter App Part II [24.01.2020]

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            this.setState(function (nextState) {
                return {
                    count: nextState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Counter, null), appRoot);
