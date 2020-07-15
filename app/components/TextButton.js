import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from './../configs/colors';

function TextButton({
	title,
	backgroundColor = 'primary',
	color = 'white',
	externalStyle,
	onPress,
}) {
	return (
		<TouchableOpacity
			style={[
				styles.button,
				{ backgroundColor: colors[backgroundColor] },
				externalStyle,
			]}
			onPress={onPress}
		>
			<Text style={[styles.text, { color: colors[color] }]}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 25,
		paddingVertical: 10,
		marginRight: 10,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default TextButton;
