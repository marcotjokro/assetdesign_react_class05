import React from 'react';
import { StyleSheet, Text, View, Button, Slider, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import Main from './comps/Main';

import { connect } from 'react-redux';
import { ChangePage, ChangeDim } from '../.././redux/actions';

class App extends React.Component {
  
	state={
		camType: Camera.Constants.Type.front,
		imgsrc: null
	}

	handleBut=()=>{
		if(this.state.camType === Camera.Constants.Type.front){
			this.setState({
				camType: Camera.Constants.Type.back
			})
		} else {
			this.setState({
				camType: Camera.Constants.Type.front 
			})
		}
	}

//	picTaken=()=>{
//		Camera.takePictureAsync({quality: 50}).then((data)=>{
//			data: data.uri
//		})
//	}

	handleSnap=async()=>{
		this.camera.takePictureAsync();
		if(this.camera){
			let photo = await this.camera.takePictureAsync();
			this.setState({
				imgsrc: photo.uri
			})  
		}
	}
			
	async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

	handleSettings=()=>{
		this.props.dispatch(ChangePage(1));
	}
	
	render() {
    return (
      <View style={styles.container}>
        <Text>Camera Testing</Text>
				<Camera 
					style={{width:this.props.dim, height:this.props.dim, margin: 10}}
					type={this.state.camType}
					ref={ref => {this.camera = ref}}
					/>
				<Button
					onPress={this.handleBut}
					title="Flip Camera"
					/>
				<Button
					onPress={this.handleSnap}
					title="Take a Pic"
					/>
				<Button 
					title="Back to Settings"
					onPress={this.handleSettings}
					/>
				<Image
					source={{uri: this.state.imgsrc}}
					style={{width: 200, height: 200, margin: 20}}
					resizeMode="cover"
					/>
				
				<Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		marginTop: 30,
  },
});

function mapStateToProps(state){
	return {
		dim: state.Page.dim
	}
}

export default connect(mapStateToProps)(App);