import React, { Component} from 'react'
class Class extends Component{
   /* render(){
        return <h4>karapaga vinaya college collrge of enginerring technology maduranthakkam</h4>
    }*/
    render(){
        return React.createElement(
            'div',
            {class:'saro'},
            React.createElement('h2',null,"maduranthakkam"),
           // React.createElement('h4',null,'preven kumar')
        )
    }
}
export default Class
