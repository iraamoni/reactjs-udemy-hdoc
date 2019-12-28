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

    //Tutorial: 6. JSX Expressions

    var user = {
        name: 'iraamoni',
        age: 27,
        location: 'London, United Kingdom'
    } // using object 

    var templateThree = (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
        </div>
    );

    var userName = 'Iraamoni';
    var userAge = 27; 
    var userLocation = 'London, United Kingdom'
    // using direct variables 

    var templateThree = (
        <div>
            <h1>{userName}</h1>
            <p>Age: {userAge}</p>
            <p>Location: {userLocation}</p>
        </div>
    );

    var appRoot = document.getElementById('app')
    ReactDOM.render(templateThree, appRoot)


    //Challenge: 6. JSX Expressions
        //create app object: string/subtitle
        // use title/subtitle
        //render template
    
    var userInfo = {
        title: 'Suborna J',
        subtitle: 'This is a short info about Suborna'
    }

    var templateFour = (
        <div>
            <h2>Title: {userInfo.title}</h2>
            <h3>Subtitle: {userInfo.subtitle}</h3>
        </div>
    );
    
    var appRoot = document.getElementById('app')
    ReactDOM.render(templateFour, appRoot)
        
    //Tutorial: 7. Conditional Rendering in JSX
    
    var userInfo = {
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

    var templateFive = (
        <div>
            <h1>{userInfo.title ? userInfo.title : 'Anonymous'}</h1>
            {getSubtitle(userInfo.subtitle)}
            <h4>Job: {userInfo.job}</h4>
            {(userInfo.age && userInfo.age >= 18) && <h5>Age: {userInfo.age}</h5>}
        </div>
    );
    
    var appRoot = document.getElementById('app')
    ReactDOM.render(templateFive, appRoot)
    
    //Challenge: 7. Conditional Rendering in JSX


