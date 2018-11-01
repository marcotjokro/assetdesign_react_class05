import React from 'react';
import { StyleSheet, Text, View, Button, Slider } from 'react-native';

import { connect } from 'react-redux';
import { ChangePage } from '.././redux/actions';

class Settings extends React.Component {
  
	handleCamera=()=>{
		this.props.dispatch(ChangePage(2));
	}
	
	handleSlider=(val)=>{
		this.props.dispatch(ChangeDim(val));
	}
	
	render() {
    return (			
			<View style={{marginTop: 30}}>
				<Text>Settings: {this.props.compPage}</Text>
				<Button
					title="Launch Camera"
					onPress={this.handleCamera}
					/>
				<Slider
					minimumValue={100}
					maximumValue={500}
					onChange={this.handleSlider}
					/>
			</View>
		);
  }
}

function mapStateToProps(state){
	return {
		compPage:state.Page.page
	}
}

export default connect(mapStateToProps)(Settings);