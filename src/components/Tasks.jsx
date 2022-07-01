import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import AddIcon from '../assets/svgs/addIcon';

export const Tasks = ({ onPress }) => {
	return (
		<View style={styles.container}>
			<Pressable onPress={onPress}>
				<View style={styles.imageContainer}>
					<Image source={require('../assets/todo.png')} style={styles.image} />
				</View>
				<Text style={styles.taskText}>CLICK TO ADD TASKS</Text>
			</Pressable>
			<Pressable onPress={onPress}>
				<View style={styles.buttonContainer}>
					<View style={{ ...styles.button, ...styles.boxWithShadow }}>
						<AddIcon />
					</View>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
	imageContainer: {
		width: 250,
		height: 250,
	},
	image: {
		width: '100%',
		height: '100%',
		flex: 1,
		resizeMode: 'contain',
	},
	taskText: {
		marginTop: 10,
		textAlign: 'center',
		color: '#909CC6',
		fontFamily: 'Poppins_500Medium',
		fontSize: 21,
	},

	buttonContainer: {
		marginTop: 10,
		width: 80,
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#01D9F7',
		width: '90%',
		height: '90%',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#fff',
	},
	boxWithShadow: {
		shadowColor: 'rgba(5, 218, 247, 0.729)',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 1,
		shadowRadius: 2,
		elevation: 10,
	},
});
