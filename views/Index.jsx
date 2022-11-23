const React = require('react')

const myStyle = {
    color: '#FFDE00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center'
};

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {
                        pokemon.map((nomekop, i) => {
                            let characterName = character.name
                            return (
                                <ul key = {i}>
                                <a href={`/pokemon/${nomekop._id}`}>{nomekop.name[0].toUpperCase() + nomekop.name.slice(1)}</a>
                                <br />
                            </ul>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


module.exports = Index;