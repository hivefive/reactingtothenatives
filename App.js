import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ViewPagerAndroid, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'react-native-linear-gradient';

function getSiteNav (title) {
    return {
        title: title,
        headerStyle: {
            backgroundColor: '#E8D825',
            paddingTop: 35,
            height: 80
        },
        headerTitleStyle: {
            color: '#fff'
        },
        header: () => {
            return (
                <View>
                    
                </View>
            )
        }
    }
}

class Button extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={() => { this.props.onPress() }}>
                <View style={styles.aboutBtn}>
                    <Text style={styles.aboutBtnText}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

class HomeScreen extends React.Component {

    static navigationOptions = getSiteNav('Gallery');
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ViewPagerAndroid
                style={styles.container}
                initialPage={0}>
                <View style={styles.pageStyle}>
                    <View style={styles.buttonWrapper}>
                        <Button
                            style={styles.aboutBtn}
                            title="About"
                            onPress={() => navigate('About')}
                        />
                        <Button
                            style={styles.aboutBtn}
                            title="Contact"
                            onPress={() => navigate('Contact')}
                        />
                    </View>
                </View>
                <View style={styles.pageStyle}>
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                        <Text style={styles.HeaderText}>Second page</Text>
                    </LinearGradient>
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/W6Qnzwf.jpg')} style={{ width: 432, height: 540 }} />
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/ny.jpg')} style={{ width: 432, height: 540 }} />
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/12352.jpg')} style={{ width: 432, height: 540 }} />
                </View>
            </ViewPagerAndroid>
        );
    }
}

class AboutScreen extends React.Component {
    static navigationOptions = getSiteNav('About');
    render() {
        return (
            <View style={styles.pageStyle}>
                <Text style={styles.HeaderText}>ABOUT</Text>
            </View>
        )
    }
}

class ContactScreen extends React.Component {
    static navigationOptions = getSiteNav('Contact');
    render() {
        return (
            <View style={styles.pageStyle}>
                <Text style={styles.HeaderText}>Christoffer Bäckström</Text>
                <Text style={styles.HeaderText}>test@test.com</Text>
                <Text style={styles.HeaderText}>070-1444553</Text>
                <Text style={styles.HeaderText}>65432 Karlstad</Text>
            </View>
        )
    }
}

export default App = StackNavigator ({
    Home: { screen: HomeScreen, title: 'Gallery'},
    About: { screen: AboutScreen, title: 'About' },
    Contact: { screen: ContactScreen }
});

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    pageStyle: {
        backgroundColor: '#E8D825'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText: {
        color: '#fff'
    },
    HeaderText: {
        fontSize: 22,
        marginTop: 25,
        color: '#fff'
    },
    aboutBtnText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    aboutBtn: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 15,
        marginRight: 5,
        borderWidth: 2,
        borderRadius: 3,
        borderColor: '#fefefe',
        width: 160
    },
    buttonWrapper: {
        backgroundColor: '#E8D825',
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around'
    }
});
