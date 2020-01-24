// Tutorial: 9. 9. Method Binding [06.01.2020 + (continued on) --> 23.01.2020]

    // const obj = {
    //     name: 'Nargis Jahan',
    //     getName() {
    //         return this.name;
    //     }
    // }

    // const getName = obj.getName.bind({obj}) // prints 'Nargis Jahan'
    // console.log(getName())

    class IndecisionApp extends React.Component {
        render() {
    
            const title = 'Indecision App';
            const subtitle = 'Put your life in the hands of a computer';
            const options = ['thing one', 'thing two', 'thing four']
    
            return (
                <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action />
                    <Options options={options}/>
                    <AddOption />
                </div>
            );
        }
    }
    
    class Header extends React.Component {
        render() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            );
        }
    }
    
    class Action extends React.Component {
        
        handlePick() {
            alert('hey');
        }
    
        render() {
            return (
                <div>
                    <button onClick={this.handlePick}>What should I do?</button>
                </div>
            );
        }
    }
    
    class Options extends React.Component {
        constructor(props) {
            super(props);
            this.handleRemoveAll = this.handleRemoveAll.bind(this);
        }
    
        handleRemoveAll() {
            console.log(this.props.options)
            // alert('hey hey')
        }
    
        render() {
            return (
                <div>
                    <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
                    {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
                </div>
            );
        }
    }
    
    class Option extends React.Component {
        render() {
            return (
                <div>
                    {this.props.optionText}
                </div>
            );
        }
    }
    
    class AddOption extends React.Component {
    
        handleAddOption(e) {
    
            e.preventDefault();
    
            const option = e.target.elements.option.value.trim(); 
            
            if (option) {
                alert(option);
            }
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.handleAddOption}>
                        <input type='text' name='option'/>
                        <button>Submit</button>
                    </form>
                </div>
            );
        }
    }
    
    const appRoot = document.getElementById('app')
    ReactDOM.render(<IndecisionApp />, appRoot)
    
    
    // Challenge: 9. 9. Method Binding [06.01.2020]
    
    