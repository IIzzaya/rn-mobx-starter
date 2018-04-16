import { AppRegistry,YellowBox } from 'react-native';
import App from './src/root';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('rn-mobx-starter', () => App);
