import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StoreState } from '../models/StoreState';
import * as actions from '../redux/actions';

import Votes from '../components/Votes';

const mapStateToProps = ({ count, name }: StoreState) => (
  {
    count,
    name: `${name}`,
  }
);

const mapDispatchToProps = (dispatch: Dispatch<actions.VotesAction>) => (
  {
    onIncrement: () => dispatch(actions.incrementVotes()),
    onDecrement: () => dispatch(actions.decrementVotes()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
