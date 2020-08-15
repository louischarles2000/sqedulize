import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={ this.props.onAddingCounter}  />
                <CounterControl label="Subtract 1 5" clicked={this.props.onSubtractingCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return (<li 
                                onClick={this.props.onDeleteResults.bind(this, result.id)}
                                key={result.id}>
                                {result.value} 
                                </li>);
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddingCounter: () => dispatch(actionCreators.add(10)),
        onSubtractingCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResults: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResults: (id) => dispatch(actionCreators.deleteResult(id))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);