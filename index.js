/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

Icon.loadFont();
AntDesign.loadFont();
MaterialIcons.loadFont();
// FontAwesome5.loadFont();

AppRegistry.registerComponent(appName, () => App);
