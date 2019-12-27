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
