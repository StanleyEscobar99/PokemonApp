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
                <h1>Gotta Catch 'Em All</h1>
                <h3><a href={`/pokemon/`}>Back To Index</a></h3>
                <h2>The Pokemon is {name}</h2>
                <img src={img} alt={name} style={{ width: "300px" }} />
                <p>IMG URL: {img}</p>
                <a href={`/pokemon/`}>BACK</a>
            </div>
        );
    }
}
module.exports = Show;
