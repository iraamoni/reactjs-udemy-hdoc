// jsx = JavaScript XML

    //Tutorial: 15. Picking an Option [02.01.2020]

    const app = {
        title: 'Indecision App',
        subtitle: 'this is the information of my app',
        options: []
    };

    const onFromSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;
        if (option) {
            app.options.push(option)
            e.target.elements.option.value = ''
        }
        render();
    };
    
    const removeAll = () => {
        app.options = [];
        render();
    };

    const onMakeDecision = () => {
        const randomNum = Math.floor(Math.random() * app.options.length);
        const options = app.options[randomNum]
        console.log(options)
    };

    const render = () => {
        var template = (
            <div>
                <h1>{app.title}</h1> 
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'here is your option' : 'no options'} </p>
                <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick = {removeAll}>Remove All</button>
                {
                    app.options.map((option) => {
                        return <li key = {option}>{option}</li>
                    })
                }
                <ol>
                    <li>Item one</li>
                    <li>Item two</li>
                </ol>
                <form onSubmit = {onFromSubmit}>
                    <input type='text' name='option'/>
                    <button>add option</button>
                </form>
            </div>
        );

        const appRoot = document.getElementById('app');
        ReactDOM.render(template, appRoot);
    };

    render()

    
    //Challenge: 15. Picking an Option [02.01.2020]


   

    