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

// 14. Build It Adding State to VisibilityToggle [25.01.2020]

/*class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props); 
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibility ? 'hide details' : 'show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>
                            Hey! Here are some details! 
                        </p>
                    </div>
                )}
            </div>
        )
    }
} 
 const appRoot = document.getElementById('app')
ReactDOM.render(<VisibilityToggle />, appRoot)
 */
