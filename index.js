import App from '@/screens/App.tsx';
import {AppRegistry, Text, TextInput} from 'react-native';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.autoCorrect = false;
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
