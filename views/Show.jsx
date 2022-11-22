const React = require("react")

const myStyle = {
    color: '#FFDE00',
    backgroundColor: '#3B4CCA',
    textAlign: 'center'
};

class Show extends React.Component {
    render () {
     const {name, img} = this.props
     console.log(this.props)
     return ( 
         <div>
             <head>
                 <title>Pokemon App</title>
             </head>
             <body style={{color:'#FFDE00', backgroundColor: '#3B4CCA'}}>
                 <h1 style={myStyle}>Gotta Catch 'Em All' </h1>
                 <h3><a href ={`/pokemon/`}>Back To Index</a></h3>
                 <h2>{name}</h2>
                 <img src ={img + '.jpg'}/>
             </body>
         </div> 
      );
     }
  }
  module.exports  = Show;
 