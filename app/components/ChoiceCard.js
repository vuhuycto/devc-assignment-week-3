import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

function ChoiceCard({ name, size }) {
	return <FontAwesome name={`hand-${name.toLowerCase()}-o`} size={size} />;
}

export default ChoiceCard;
