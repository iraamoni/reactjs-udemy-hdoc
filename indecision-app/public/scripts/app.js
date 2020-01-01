'use strict';

// jsx = JavaScript XML

//Tutorial: 14. Arrays in JSX [01.01.2020]

var app = {
    title: 'Indecision App',
    subtitle: 'this is the information of my app',
    options: []
};

var onFromSubmit = function onFromSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'here is your option' : 'no options',
            ' '
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        app.options.map(function (option) {
            return React.createElement(
                'li',
                { key: option },
                option
            );
        }),
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
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFromSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'add option'
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();

//Challenge: 14. Arrays in JSX [01.01.2020]
