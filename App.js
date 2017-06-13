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
                <View style={styles.topHeader}>
                    <Image source={require('./assets/oecqndsg.png')} style={styles.bImage} >
                        <Text style={styles.headerh1}>topHeader</Text>
                    </Image>
                </View>
            )
        }
    }
}

class Button extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={() => { this.props.onPress() }} underlayColor='#fff'>
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
                    <Image source={require('./assets/icbmqjdu.png')} style={styles.bImage} >
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
                    </Image>
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/icbmqjdu.png')} style={styles.bImage} >
                        <Text style={styles.h1}>Second page</Text>
                    </Image>
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/W6Qnzwf.jpg')} style={styles.bImage}>
                        <Text style={styles.h1}>BARCELONA</Text>
                    </Image>
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/ny.jpg')} style={ styles.bImage } >
                        <Text style={styles.h1}>NEW YORK</Text>
                    </Image>
                </View>
                <View style={styles.pageStyle}>
                    <Image source={require('./assets/12352.jpg')} style={styles.bImage} />
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
                <Image source={require('./assets/icbmqjdu.png')} style={styles.maxImg}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.h1}>ABOUT</Text>
                        <Text style={{ color: '#fff', marginTop: 15, marginLeft: 15 }}>This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. 
                            This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different.
                            This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different. This is where an about text would be placed. There would here sit an explanation of this application or of something entirely different.
                        </Text>
                    </View>
                </Image>
            </View>
        )
    }
}

class ContactScreen extends React.Component {
    static navigationOptions = getSiteNav('Contact');
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Image source={require('./assets/icbmqjdu.png')} style={styles.bImage}>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg}/>
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg} />
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg} />
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg} />
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg} />
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg} />
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={require('./assets/jslogo.png')} style={styles.avatarImg} />
                        <Text style={styles.h1}>Christoffer Bäckström</Text>
                        <Text style={styles.h2}>test@test.com</Text>
                        <Text style={styles.h2}>070-1444553</Text>
                        <Text style={styles.h2}>65432 Karlstad</Text>
                    </View>
                </Image>
            </ScrollView>
        )
    }
}

export default App = StackNavigator ({
    Home: { screen: HomeScreen, title: 'Gallery'},
    About: { screen: AboutScreen, title: 'About' },
    Contact: { screen: ContactScreen }
});

const styles = StyleSheet.create({
    textWrapper: {
        flex: 1,
        padding: 15,
        marginTop: 25
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    contactInfo: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80
    },
    maxImg: {
        width: '100%',
        height: '100%'
    },
    bImage: {
        flex: 1,
        width: null,
        height: null
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
    h1: {
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#fff'
    },
    h2: {
        fontSize: 22,
        marginLeft: 10,
        color: '#fff'
    },
    headerh1: {
        fontSize: 26,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#fff',
        marginTop: 23
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
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around'
    },
    topHeader: {
        height: 60,
        backgroundColor: 'transparent'
    },
    avatarImg: {
        borderWidth: 0,
        borderColor: '#fff',
        margin: 15,
        width: 128,
        borderRadius: 100
    }
});
