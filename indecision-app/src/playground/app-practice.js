
//  || Tutorial 5, 6, 7, 13

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

    const appRoot = document.getElementById('app')
    ReactDOM.render(template, appRoot)

    //Challenge: 5. Exploring JSX
        //create a templateTwo const JSX expression
        // div 
        // h1 -> your name 
        // p -> age: your age
        // p -> location: your location
        // render templateTwo instead of Template
    
    const templateTwo = (
        <div>
            <h1>Suborna J</h1>
            <p>Age: 27</p>
            <p>Location: Turin, Italy</p>
        </div>
    );

    const appRoot = document.getElementById('app')
    ReactDOM.render(templateTwo, appRoot)

    //Tutorial: 6. JSX Expressions

    const user = {
        name: 'iraamoni',
        age: 27,
        location: 'London, United Kingdom'
    } // using object 

    const templateThree = (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
        </div>
    );

    const userName = 'Iraamoni';
    const userAge = 27; 
    const userLocation = 'London, United Kingdom'
    // using direct constables 

    const templateThree = (
        <div>
            <h1>{userName}</h1>
            <p>Age: {userAge}</p>
            <p>Location: {userLocation}</p>
        </div>
    );

    const appRoot = document.getElementById('app')
    ReactDOM.render(templateThree, appRoot)


    //Challenge: 6. JSX Expressions
        //create app object: string/subtitle
        // use title/subtitle
        //render template
    
    const userInfo = {
        title: 'Suborna J',
        subtitle: 'This is a short info about Suborna'
    }

    const templateFour = (
        <div>
            <h2>Title: {userInfo.title}</h2>
            <h3>Subtitle: {userInfo.subtitle}</h3>
        </div>
    );
    
    const appRoot = document.getElementById('app')
    ReactDOM.render(templateFour, appRoot)
        
    //Tutorial: 7. Conditional Rendering in JSX
    
    const userInfo = {
        title: 'Suborna Jahan',
        subtitle: 'This is a short info about Suborna',
        job: 'UI/UX designer',
        age: 27
    }

    function getSubtitle(subtitle) {
        if (subtitle) {
            return <h3>Subtitle: {subtitle}</h3>
        } 
    }

    const templateFive = (
        <div>
            <h1>{userInfo.title ? userInfo.title : 'Anonymous'}</h1>
            {getSubtitle(userInfo.subtitle)}
            <h4>Job: {userInfo.job}</h4>
            {(userInfo.age && userInfo.age >= 18) && <h5>Age: {userInfo.age}</h5>}
        </div>
    );
    
    const appRoot = document.getElementById('app')
    ReactDOM.render(templateFive, appRoot)
    
    //Challenge: 7. Conditional Rendering in JSX
    
        //only render the subtitle (and p tag )if the subtitle exists -logical and operator 
        // render new p tag - if options.length > 0 'here are your option' ' 'no option'

    const app = {
        title: 'Indecision App',
        subtitle: 'this is the information of my app',
        options: ['one', 'two']
    }

    const template = (
        <div>
            <h1>Indecision App</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here are your option' : 'no option'}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
                <li>Item three</li>
                <li>Item four</li>
            </ol>
        </div>
    );

    const appRoot = document.getElementById('app')
    ReactDOM.render(template, appRoot)

    //---------------------------------------------------------------------------------------------

    //Tutorial: 13. Forms and Inputs [01.01.2020]

    const app = {
        title: 'Indecision App',
        subtitle: 'this is the information of my app',
        options: []
    };

    const onFromSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;
        if (option) {
            app.options.push(option)
            e.target.elements.option.value = ''
        }
        render();
    };

    let count = 0;
    const removeAll = () => {
        app.options = [];
        render();
    };

    const render = () => {
        var template = (
            <div>
                <h1>{app.title}</h1> 
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'here is your option' : 'no options'} </p>
                <p>{app.options.length}</p>
                <button onClick = {removeAll}>Remove All</button>
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                <form onSubmit = {onFromSubmit}>
                    <input type='text' name='option'/>
                    <button>add option</button>
                </form>
            </div>
        );

        const appRoot = document.getElementById('app');
        ReactDOM.render(template, appRoot);
    };

    render()

    
    //Challenge: 13. Forms and Inputs [01.01.2020]

    //Added a Remove All button
    //created the removeAll function    

    //---------------------------------------------------------------------------------------------

    //Tutorial: 14. Arrays in JSX [01.01.2020]

    const app = {
        title: 'Indecision App',
        subtitle: 'this is the information of my app',
        options: []
    };

    const onFromSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;
        if (option) {
            app.options.push(option)
            e.target.elements.option.value = ''
        }
        render();
    };
    
    const removeAll = () => {
        app.options = [];
        render();
    };

    const render = () => {
        var template = (
            <div>
                <h1>{app.title}</h1> 
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'here is your option' : 'no options'} </p>
                <p>{app.options.length}</p>
                <button onClick = {removeAll}>Remove All</button>
                {
                    app.options.map((option) => {
                        return <li key = {option}>{option}</li>
                    })
                }
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                <form onSubmit = {onFromSubmit}>
                    <input type='text' name='option'/>
                    <button>add option</button>
                </form>
            </div>
        );

        const appRoot = document.getElementById('app');
        ReactDOM.render(template, appRoot);
    };

    render()

    
    //Challenge: 14. Arrays in JSX [01.01.2020]
    //forgot