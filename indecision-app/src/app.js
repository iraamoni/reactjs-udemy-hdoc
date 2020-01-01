// jsx = JavaScript XML

    //Tutorial: 11. Events and Attributes

    var template = (
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
        console.log('addOne', count)
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

    const appRoot = document.getElementById('app')
    ReactDOM.render(templateTwo, appRoot)
    
    //Challenge: 11. Events and Attributes
    //created the minus one button and function 
    //created the reset button and function 

   

    