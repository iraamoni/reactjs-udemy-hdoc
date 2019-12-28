'use strict';

// jsx = JavaScript XML

//Tutorial: 5. Exploring JSX

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is my app info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        ),
        React.createElement(
            'li',
            null,
            'Item four'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

//Challenge: 5. Exploring JSX
//create a templateTwo var JSX expression
// div 
// h1 -> your name 
// p -> age: your age
// p -> location: your location
// render templateTwo instead of Template

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Suborna J'
    ),
    React.createElement(
        'p',
        null,
        'Age: 27'
    ),
    React.createElement(
        'p',
        null,
        'Location: Turin, Italy'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

//Tutorial: 6. JSX Expressions

var user = {
    name: 'iraamoni',
    age: 27,
    location: 'London, United Kingdom' // using object 

};var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var userName = 'Iraamoni';
var userAge = 27;
var userLocation = 'London, United Kingdom';
// using direct variables 

var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateThree, appRoot);

//Challenge: 6. JSX Expressions
//create app object: string/subtitle
// use title/subtitle
//render template

var userInfo = {
    title: 'Suborna J',
    subtitle: 'This is a short info about Suborna'
};

var templateFour = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Title: ',
        userInfo.title
    ),
    React.createElement(
        'h3',
        null,
        'Subtitle: ',
        userInfo.subtitle
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateFour, appRoot);

//Tutorial: 7. Conditional Rendering in JSX

var userInfo = {
    title: 'Suborna Jahan',
    subtitle: 'This is a short info about Suborna',
    job: 'UI/UX designer',
    age: 27
};

function getSubtitle(subtitle) {
    if (subtitle) {
        return React.createElement(
            'h3',
            null,
            'Subtitle: ',
            subtitle
        );
    }
}

var templateFive = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userInfo.title ? userInfo.title : 'Anonymous'
    ),
    getSubtitle(userInfo.subtitle),
    React.createElement(
        'h4',
        null,
        'Job: ',
        userInfo.job
    ),
    userInfo.age && userInfo.age >= 18 && React.createElement(
        'h5',
        null,
        'Age: ',
        userInfo.age
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateFive, appRoot);

//Challenge: 7. Conditional Rendering in JSX
