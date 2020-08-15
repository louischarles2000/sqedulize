import React, {  } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

const Home = props => {
    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

const mapStateToProps = state => {
    return {  
        
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);