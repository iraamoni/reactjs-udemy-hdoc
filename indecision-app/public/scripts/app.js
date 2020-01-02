'use strict';

// 16. Build It Visibility Toggle [02.01.2020]
var app = {
    title: 'Visibility toggle',
    paragraph: 'hello world, how are you today '
};

var visibility = false;
var toggle = function toggle() {
    visibility = !visibility;
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
        React.createElement(
            'button',
            { onClick: toggle },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                app.paragraph
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
