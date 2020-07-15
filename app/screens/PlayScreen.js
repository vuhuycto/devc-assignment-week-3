import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from './Screen';
import TextButton from './../components/TextButton';
import colors from './../configs/colors';
import ChoiceCard from './../components/ChoiceCard';
import generateRandomNumber from '../utils/random';
import choices from './../configs/choices';

function PlayScreen() {
	const [yourChoice, setYourChoice] = useState('');
	const [opponentChoice, setOpponentChoice] = useState(
		choices[generateRandomNumber(choices.length)].name
	);
	const [started, setStarted] = useState(false);

	const getOutcome = () => {
		if (yourChoice === 'Rock')
			if (opponentChoice === 'Paper') return 'You lose!';
			else if (opponentChoice === 'Rock') return 'Tie Game!';
			else return 'You win!';
		else if (yourChoice === 'Paper')
			if (opponentChoice === 'Rock') return 'You win!';
			else if (opponentChoice === 'Paper') return 'Tie Game!';
			else return 'You lose!';
		else if (opponentChoice === 'Rock') return 'You lose!';
		else if (opponentChoice === 'Paper') return 'You win!';
		else return 'Tie Game!';
	};

	const handleSelect = (choice) => {
		if (!started) setStarted(true);
		setYourChoice(choice.name);
		setOpponentChoice(choices[generateRandomNumber(choices.length)].name);
	};

	return (
		<Screen>
			<View style={styles.container}>
				<Text style={styles.result}>
					{!started ? "Let's play" : getOutcome()}
				</Text>
				<View style={styles.play}>
					<View style={styles.player}>
						<Text style={styles.name}>You</Text>
						{started ? <ChoiceCard name={yourChoice} size={100} /> : null}
					</View>
					<View style={styles.player}>
						<Text style={styles.name}>Opponent</Text>
						{started ? <ChoiceCard name={opponentChoice} size={100} /> : null}
					</View>
				</View>
				<View style={styles.cta}>
					{choices.map((choice) => (
						<TextButton
							key={choice.name}
							title={choice.name}
							externalStyle={styles.button}
							onPress={() => handleSelect(choice)}
						/>
					))}
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	result: {
		fontSize: 32,
		marginBottom: 50,
		color: colors.secondary,
	},
	play: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: 200,
	},
	player: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 30,
	},
	name: {
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 10,
	},
	button: {
		width: 150,
		marginVertical: 7,
	},
	cta: {
		marginTop: 25,
	},
});

export default PlayScreen;
