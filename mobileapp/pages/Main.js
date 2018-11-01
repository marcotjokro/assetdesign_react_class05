import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage } from '.././redux/actions';

import Settings from './Settings';
import MyCamera from './camera/App';

class Main extends React.Component {

	render() {
		
		var comp = null;
		if(this.props.compPage === 1){
			comp = <Settings />
		} else if(this.props.compPage === 2){
			comp = <MyCamera />
		}
		
    return (			
			<View>
				{comp}
			</View>
		);
  }
}

function mapStateToProps(state){
	return {
		compPage:state.Page.page
	}
}

export default connect(mapStateToProps)(Main);