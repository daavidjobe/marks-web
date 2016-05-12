import React from 'react';
import MarkActions from '../../actions/mark-actions';
import TabButton from '../buttons/TabButton';
import MarkStore from '../../stores/mark-store';
import UserStore from '../../stores/user-store';
import PublicMark from './PublicMark';

export default class PublicMarkList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      tabButtons: [
        {
          txt: 'feed',
          symbol: 'fa fa-cogs',
          active: true
        },
        {
          txt: 'most popular',
          symbol: 'fa fa-thumbs-up',
          active: false
        }
      ]
    }
  }

  componentDidMount() {
    MarkStore.addChangeListener(this._onChange.bind(this));
    MarkActions.fetchPublicMarks();
  }

  componentWillUnmount() {
    MarkStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({ feed: MarkStore.getPublicMarks() });
  }
  
  viewFeed() {
    let tabButton = this.state.tabButtons;
    tabButton[0].active = true;
    tabButton[1].active = false;
    this.setState({tabButton});
  }
  
  viewMostPopular() {
    let tabButton = this.state.tabButtons;
    tabButton[0].active = false;
    tabButton[1].active = true;
    this.setState({tabButton});
  }
  
  promote(mark) {
    let email = UserStore.getEmail();
    if(email !== null) {
      MarkActions.promote(mark, email);
    }
  }
  
  demote(mark) {
    let email = UserStore.getEmail();
    if(email !== null) {
      MarkActions.demote(mark, email);
    }
  }

  render() {
    
    let marks = this.state.feed.map((mark, index) => {
      return <PublicMark handlePromote={this.promote.bind(this, mark)}
      handleDemote={this.demote.bind(this, mark)}
      mark={mark} key={index} />
    });

    return (
      <div className="public-marks">
        <div className="public-mark-controls">
          <TabButton handleClick={this.viewFeed.bind(this)} txt={this.state.tabButtons[0].txt}
          active={this.state.tabButtons[0].active} symbol={this.state.tabButtons[0].symbol} />
          <TabButton handleClick={this.viewMostPopular.bind(this)} txt={this.state.tabButtons[1].txt}
          active={this.state.tabButtons[1].active} symbol={this.state.tabButtons[1].symbol} />
        </div> 
        <ul>
          {marks}
        </ul>
      </div>
    )
  }
}
