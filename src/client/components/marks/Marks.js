import React from 'react';
import './marks.less';




class Marks extends React.Component {
    
 constructor() {
     super();
     this.state = {
         marks: []
     }
 } 
 
 render() {
     
     
    return (
        <ul className="marks">
            
        </ul>
    )
 }
}

export default Marks