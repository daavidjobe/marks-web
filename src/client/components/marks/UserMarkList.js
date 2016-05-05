import React from 'react';
import Mark from './Mark';


const marks = [
	{
		url: 'https://cymarks.com',
		created: '2016-01-01'
	},
	{
		url: 'https://enigio.com',
		created: '2016-01-01'
	},
	{
		url: 'https://timebeat.com',
		created: '2016-01-01'
	},
	{
		url: 'https://cymarks.com',
		created: '2016-01-01'
	},
	{
		url: 'https://enigio.com',
		created: '2016-01-01'
	},
	{
		url: 'https://timebeat.com',
		created: '2016-01-01'
	},
	{
		url: 'https://cymarks.com',
		created: '2016-01-01'
	},
	{
		url: 'https://enigio.com',
		created: '2016-01-01'
	},
	{
		url: 'https://timebeat.com',
		created: '2016-01-01'
	}
]


export default class UserMarkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	marks
    }
  }

  render() {

  	let marks = this.state.marks.map((mark, index) => {
  		return <Mark key={index} mark={mark} />
  	})

    return (
      <ul>
      	{marks}
      </ul>
    );
  }
}
