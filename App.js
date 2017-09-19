import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Alert, AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default app;

// export default class App extends React.Component {
// 	render() {
// 	return (
// 		<View style={styles.container}>
// 			<StatusBar hidden={true} />
// 			<View style={styles.bar}>
// 				<Text style={styles.bartext}>Home</Text>
// 			</View>
// 			<Text style={styles.logo}>Locate Local</Text>
// 			<View style={styles.btnview}>
// 				<Button
// 					style={styles.button}
// 					onPress={() => { Alert.alert('Button tapped.')}}
// 					title="Locate"
// 					color="#99cc99"
// 				/>
// 				<Button
// 					style={styles.button}
// 					onPress={() => { Alert.alert('Button tapped.')}}
// 					title="Deals"
// 					color="#99cc99"
// 				/>
// 				<Button
// 					style={styles.button}
// 					onPress={() => { Alert.alert('Button tapped.')}}
// 					title="Lists"
// 					color="#99cc99"
// 				/>
// 				<Button
// 					style={styles.button}
// 					onPress={() => { Alert.alert('Button tapped.')}}
// 					title="Recipes"
// 					color="#99cc99"
// 				/>
// 			</View>
// 		</View>
// 	);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 	flex: 1,
// 	backgroundColor: '#fff',
// 	alignSelf: 'stretch',
// 	alignItems: 'center',
// 	justifyContent: 'space-around',
// 	},
// 	bar: {
// 		width: '100%',
// 		backgroundColor: '#ccc',
// 		flex: 3,
// 		alignItems: 'center',
// 	},
// 	bartext: {
// 		flex: 1,
// 		textAlignVertical: 'center',
// 		fontSize: 20,
// 		height: '100%',
// 	},
// 	logo: {
// 		flex: 6,
// 		fontSize: 60,
// 		textAlign: 'center',
// 		textAlignVertical: 'center',
// 	},
// 	btnview: {
// 		flex: 24,
// 		width: '70%',
// 		height: 200,
//         flexDirection: 'column',
//         justifyContent: 'space-around',
// 	},
// 	button: {
// 		height: 200
// 	}
// });
