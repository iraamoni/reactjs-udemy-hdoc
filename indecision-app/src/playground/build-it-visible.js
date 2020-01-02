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

render()
