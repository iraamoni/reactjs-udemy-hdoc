// Tutorial: 5. Creating a React Component [04.01.2020]

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <button>What should I do?</button>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
    </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(jsx, appRoot)

// Challenge: 5. Creating a React Component [04.01.2020]

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <button>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <h1>Options component here</h1>
        )
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
        )
    }
}

const jsx = (
    <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
    </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(jsx, appRoot)

    