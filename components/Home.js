import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoryData from '../assets/data/categoryData';
import popularData from '../assets/data/popularData' ;
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import colors from '../assets/colors/colors';

const Home = () => {
const renderCategoryItem = ({item}) => {
        return (
            <View>
                <Image source={item.image} />
                <Text>{item.title}</Text>
                <Feather name='chevron-right' />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerWrappers}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={styles.profileImage} 
                    />
                    {/* Icon */}
                    <Feather name='menu' size={24} color={colors.textDark} ></Feather>
                 </View> 
            </SafeAreaView>

            {/* title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.foodTitle}>Food</Text>
                <Text style={styles.deliverytitle}>Delivery</Text>
            </View>

            {/* Seearch */}
            <View style={styles.searchWrapper}>
                <Feather name='search' size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categoryWrapper}>
                <Text style={styles.categoryText}>Categories</Text>
                <View style={styles.categoryListWrapper}>
                    <FlatList
                        data={categoryData} 
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
        </View>
        ) 
}
const styles = StyleSheet.create({
    container: {
    flex:1
},
    headerWrappers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
},
    profileImage: {
        height: 40,
        width: 40,
        borderRadius:40,
    },
    titleWrapper: {
        paddingHorizontal:20
    },
foodTitle:{
    color: '#313234',
    fontSize: 20,
   marginTop:30,  
},
    deliverytitle: {
        fontSize: 32,
        paddingTop: 5,
        color: '#313234',

    },
    searchWrapper: {
        paddingHorizontal: 20,
        marginTop: 36,
        flexDirection: 'row',
        alignItems:'center'
    },
    search: {
        flex: 1,
        width: 2,
        marginLeft: 10,
        borderBottomWidth: 2,
        borderBottomColor:colors.text,
    
},
    searchText: {
        marginLeft: 12,
        color: colors.text,
        fontSize:14,
    },
    categoryWrapper: {
        marginTop: 30,
        paddingHorizontal:20
    },
    categoryText: {
        fontSize: 16,
        color: colors.textDark,
},
categoryListWrapper:{},
})

export default Home;