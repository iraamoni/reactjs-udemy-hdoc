
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

    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.handleAddOne = this.handleAddOne.bind(this)
            this.handleMinusOne = this.handleMinusOne.bind(this)
            this.handleReset = this.handleReset.bind(this)
            this.state = {
                count: 0
            }
        }
        
        handleAddOne() {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                };
            })
        }

        handleMinusOne() {
            this.setState((nextState) => {
                return {
                    count: nextState.count - 1
                }
            })
        }

        handleReset() {
            this.setState(() => {
                return {
                    count: 0
                }
            })
        }

        render() {
            return (
                <div>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={this.handleAddOne}>+1</button>
                    <button onClick={this.handleMinusOne}>-1</button>
                    <button onClick={this.handleReset}>reset</button>
                </div>
            )
        };
    }

    const appRoot = document.getElementById('app')
    ReactDOM.render(<Counter />, appRoot)

    