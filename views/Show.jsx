const React = require("react")

const myStyle = {
    color: '#FFDE00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center'
};

class Show extends React.Component {
    render() {
        const { name, img } = this.props.pokemon
        return (
            <div>
                <head>
                    <h1>Gotta Catch 'Em All</h1>
                </head>
                <h3><a href={`/pokemon/`}>Back To Index</a></h3>
                <h2>The Pokemon is {name}</h2>
                <img src={img + ".jpg"}></img>
                <a href={`/pokemon/`}>BACK</a>
            </div>
        );
    }
}
module.exports = Show;
