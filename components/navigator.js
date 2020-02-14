/*Page navigation */

import SignIn from './signin'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Registration from './registration'
import SplashScreen from './splashScreen'
import ForgotPassword from './forgotPassword'
import MainHome from './dashboard/mainhome'
import Aboutus from './homePro/about';


const MainNavigator = createStackNavigator({
    'SplashScreen':{screen:SplashScreen,navigationOptions: {
        headerShown: false,
      }},
  Signin: {screen: SignIn,navigationOptions: {
        headerShown: false,
      }},
  CreateAccout: {screen: Registration,navigationOptions: {
        headerShown: false,
      }},
      ForgetPassword: {screen: ForgotPassword,navigationOptions: {
        headerShown: false,
      }},
      'MainHome': {screen: MainHome,navigationOptions: {
        headerShown: false,
      }},
      'Aboutus':{screen:Aboutus},
});

const Appnavigation = createAppContainer(MainNavigator);
export default Appnavigation