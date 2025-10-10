import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { InputFieldProps } from './types';
import { getInputStyle, InputState } from './styles/getInputStyle';

const InputField = (props: InputFieldProps) => {
	const {
		value,
		onChange,
		placeholder,
		label,
		multiline = false,
		error,
		secureTextEntry = false,
		style,
		disabled = false,
	} = props;
	const state: InputState = disabled ? 'disabled' : error ? 'error' : 'primary';

	const { inputStyle, errorTextStyle } = getInputStyle(state, style);

	return (
		<View>
			{label && <Text>{label}</Text>}
			<TextInput
				value={value}
				onChangeText={onChange}
				placeholder={placeholder}
				multiline={multiline}
				secureTextEntry={secureTextEntry}
				editable={!disabled}
				style={inputStyle}
			/>
			{error && (
				<Text style={errorTextStyle}>{error}</Text>
			)}
		</View>
	);
};

export default InputField;
