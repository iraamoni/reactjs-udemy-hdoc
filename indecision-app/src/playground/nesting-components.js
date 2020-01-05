// Tutorial: 6. Nesting Components[05.01.2020]

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h1>Options component here</h1>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Add option component here
                </h1>
            </div>
        );
    }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)


// Challenge: 6. Nesting Components[05.01.2020]

class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h1>Options component here</h1>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Add option component here
                </h1>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <h1>Option component here</h1>
            </div>
        );
    }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)
