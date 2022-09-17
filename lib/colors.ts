import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
	gray: {
		50: '#f9fafb',
		100: '#eaeaeb',
		200: '#cacbcd',
		300: '#a7a9ac',
		400: '#696c71',
		500: '#282d34',
		600: '#24292f',
		700: '#181b20',
		800: '#121518',
		900: '#0c0e10',
	},
	primary: {
		50: '#15dc9b',
		100: '#15dc9b',
		200: '#15dc9b',
		300: '#15dc9b',
		400: '#15dc9b',
		500: '#15dc9b',
		600: '#13c58b',
		700: '#15dc9b',
		800: '#15dc9b',
		900: '#053928',
	},
};
