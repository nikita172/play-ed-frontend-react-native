import EventRegister from '../screens/EventRegister';
import Home from '../screens/Home';
import ListView from '../screens/ListView';
import Detail from '../screens/Detail';
import Contact from '../screens/Contact';
import Register from '../screens/Register';
import Splash from '../screens/Splash';
import LoginFirst from '../screens/Login-1';
import LoginSecond from '../screens/Login-2';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();
export default function AppStack() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false,
            drawerStyle: { backgroundColor: 'transparent' }
        }}>
            <Drawer.Screen name="Splash" component={Splash} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="LoginFirst" component={LoginFirst} />
            <Drawer.Screen name="LoginSecond" component={LoginSecond} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="EventRegister" component={EventRegister} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="ListView" component={ListView} />
            <Drawer.Screen name="Detail" component={Detail} />
        </Drawer.Navigator>
    )
}