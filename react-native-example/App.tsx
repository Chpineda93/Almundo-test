import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/Screens/Home';
import ProfileScreen from './src/Screens/Hotel';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Hotel: { screen: ProfileScreen }
});

const App = createAppContainer(MainNavigator);

export default App;