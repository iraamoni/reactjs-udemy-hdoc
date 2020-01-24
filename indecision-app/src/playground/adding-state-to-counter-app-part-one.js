
//React Components ---> Challenge: 11. Adding State to Counter App Part I [23.01.2020]

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    
    handleAddOne() {
        console.log('handleAddOne')
    }

    handleMinusOne() {
        console.log('handleMinusOne')
    }

    handleReset() {
        console.log('handleReset')
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    };
}

const appRoot = document.getElementById('app')
ReactDOM.render(<Counter />, appRoot)