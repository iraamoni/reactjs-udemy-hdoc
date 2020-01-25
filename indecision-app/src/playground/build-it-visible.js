// 16. Build It Visibility Toggle [02.01.2020]

    const app = {
        title: 'Visibility toggle',
        paragraph: 'hello world, how are you today '
    }

    let visibility = false; 
    const toggle = () => {
        visibility = !visibility;
        render()
    }

    const render = () => {
        const template = (
            <div>
                <h1>{app.title}</h1>
                <button onClick = {toggle}>
                {visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {visibility && (
                    <div>
                        <p>{app.paragraph}</p>
                    </div>
                )}
            </div>
        );

        const appRoot = document.getElementById('app');
        ReactDOM.render(template, appRoot);

    }

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