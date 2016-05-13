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
      popular: [],
      feedActive: true,
      tabButtons: [
        {
          active: true
        },
        {
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
    this.setState({
      feed: MarkStore.getPublicMarks(),
      popular: MarkStore.getPopularMarks()
    });
  }

  viewFeed() {
    MarkActions.fetchPublicMarks();
    let tabButton = this.state.tabButtons;
    tabButton[0].active = true;
    tabButton[1].active = false;
    this.setState({ tabButton, feedActive: true });
  }

  viewMostPopular() {
    MarkActions.fetchMostPopularMarks();
    let tabButton = this.state.tabButtons;
    tabButton[0].active = false;
    tabButton[1].active = true;
    this.setState({ tabButton, feedActive: false });
  }

  promote(mark) {
    let email = UserStore.getEmail();
    if (email !== null) {
      MarkActions.promote(mark, email);
    }
  }

  demote(mark) {
    let email = UserStore.getEmail();
    if (email !== null) {
      MarkActions.demote(mark, email);
    }
  }

  render() {
    let marks;
    if (this.state.feedActive) {
      marks = this.state.feed.map((mark, index) => {
        return <PublicMark handlePromote={this.promote.bind(this, mark) }
          handleDemote={this.demote.bind(this, mark) }
          mark={mark} key={index} />
      });
    } else {
      marks = this.state.popular.map((mark, index) => {
        return <PublicMark handlePromote={this.promote.bind(this, mark) }
          handleDemote={this.demote.bind(this, mark) }
          mark={mark} key={index} />
      });
    }

    return (
      <div className="public-marks">
        <div className="public-mark-controls">
          <TabButton handleClick={this.viewFeed.bind(this) } txt="feed"
            active={this.state.tabButtons[0].active} symbol="fa fa-cog" />
          <TabButton handleClick={this.viewMostPopular.bind(this) } txt="most popular"
            active={this.state.tabButtons[1].active} symbol="fa fa-thumbs-up" />
        </div>
        <ul>
          {marks}
        </ul>
      </div>
    )
  }
}
