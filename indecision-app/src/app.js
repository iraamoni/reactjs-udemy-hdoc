// jsx = JavaScript XML

    //Tutorial: 5. Exploring JSX

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

    var appRoot = document.getElementById('app')

    ReactDOM.render(template, appRoot)

    //Challenge: 5. Exploring JSX
        //create a templateTwo var JSX expression
        // div 
        // h1 -> your name 
        // p -> age: your age
        // p -> location: your location
        // render templateTwo instead of Template
    
    var templateTwo = (
        <div>
            <h1>Suborna J</h1>
            <p>Age: 27</p>
            <p>Location: Turin, Italy</p>
        </div>
    );

    var appRoot = document.getElementById('app')

    ReactDOM.render(templateTwo, appRoot)

        


