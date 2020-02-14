import React from 'react';
import MainNavigator from '../../components/bottomNav'
import MainDrawer from '../../components/Nav/DrawerNavigation/mainDrawer'


class MainHome extends React.Component{
    render(){
    return ( <><MainDrawer/><MainNavigator style = {
            { elevation: 5 } }/></> );
}};
export default MainHome;