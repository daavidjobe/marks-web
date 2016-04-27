import React from 'react';
import Mark from './Mark';
import './marks.less';


const marks = [
    {
        url: 'https://timebeat.com',
        created: '2015-01-14'
    },
    {
        url: 'https://enigio.com',
        created: '2015-01-19'
    },
    {
        url: 'http://www.cymarks.com',
        created: '2015-03-14'
    },
    {
        url: 'http://www.cymarks.com',
        created: '2015-03-14'
    }
]


class Marks extends React.Component {
    
 constructor() {
     super();
     this.state = {
         marks: marks
     }
 } 
 
 render() {
     
     let list = this.state.marks.map((item, index) => {
        return <Mark key={index} mark={item} /> 
     });
     
    return (
        <ul className="marks">
            {list}
        </ul>
    )
 }
}

export default Marks