module.exports = {
	plugins: ["react", "react-hooks"],
	extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
	overrides: [
		{
			files: ["_*.{jsx,tsx}"],
			rules: {
				/**
				 * Plugins - Import
				 *
				 * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules
				 */
				"import/no-default-export": "off",
			},
		},
	],
	rules: {
		/**
		 * TypeScript
		 */
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "default",
				format: ["camelCase"],
			},
			{
				selector: "variableLike",
				format: ["camelCase", "PascalCase", "UPPER_CASE"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
		/**
		 * Plugins - filename
		 *
		 * https://github.com/selaux/eslint-plugin-filenames#rules
		 */
		"filenames/match-regex": ["error", "^_?[a-zA-Z0-9-.@]+$", true],
		/**
		 * React
		 */
		"react/display-name": "off",
		"react/jsx-uses-react": "warn",
		"react/prop-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/boolean-prop-naming": "error",
		"react/destructuring-assignment": ["error", "always"],
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"react/no-array-index-key": "error",
		"react/prefer-es6-class": "error",
	},
};
