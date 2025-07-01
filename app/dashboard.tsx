import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.container1}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Image
            source={{ uri: "https://tse4.mm.bing.net/th/id/OIP.Gz62k7vTQNxqkz9Q6yE4NgHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3" }}
            style={styles.profileImage}
          />
          <View>
            <Text style={{ color: 'gray' }}>Good morning</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
          </View>
        </View>
        <View style={styles.notificationIcon}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.container2}>
        <View style={styles.searchBar}>
          <MaterialIcons name="search" size={20} color="gray" />
          <TextInput placeholder="Search" style={styles.searchInput} />
          <MaterialIcons name="filter-alt" size={20} color="gray" />
        </View>
      </View>

      {/* Banner Image */}
      <View style={styles.container3}>
        <ImageBackground
          source={{ uri: "https://i.ytimg.com/vi/Kxr89dmvPNA/maxresdefault.jpg" }}
          style={styles.bannerImage}
          resizeMode="stretch"
        />
      </View>

      {/* Remaining Containers (Placeholders) */}
      <View style={styles.container4}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}  >Experiences</Text>
          <Text>View all</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <View>
            <MaterialIcons name='music-video' size={44} color="black"  style={{alignSelf:'flex-end'}}/>
            <Text>Music</Text>
            </View>
             <View>
            <MaterialIcons name='fastfood' size={44} color="black"  style={{alignSelf:'flex-end'}}/>
            <Text>Food</Text>
            </View>
             <View>
            <MaterialIcons name='sports-bar' size={44} color="black"  style={{alignSelf:'flex-end'}}/>
            <Text>Dancer</Text>
            </View>
             <View>
            <MaterialIcons name='school' size={44} color="black"  style={{alignSelf:'flex-end'}}/>
            <Text>Education</Text>
            </View>
         
          
        </View>
      </View>
      <View style={styles.container5}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}  >Workshops</Text>
          
        </View>
        <ImageBackground 
          source={{ uri: "https://i.ytimg.com/vi/Kxr89dmvPNA/maxresdefault.jpg" }}
          style={styles.bannerImage}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.container6}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:40}}> 
            <TouchableOpacity style={{ justifyContent:'space-between', alignItems:'center'}}>
            <MaterialIcons name="home" size={24} color="black" />
          <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent:'space-between', alignItems:'center'}}>
            <MaterialIcons name="search" size={24} color="black" />
          <Text>Search</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={{ marginHorizontal:"43%", backgroundColor:'white', borderRadius:40, padding:10, position:'absolute', bottom:0}}>
          <MaterialIcons name="add-circle" size={54} color="black" />
        
        </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:40}}>
          <TouchableOpacity style={{ justifyContent:'space-between', alignItems:'center'}}>
          <MaterialIcons name="person" size={24} color="black" />
        <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent:'space-between', alignItems:'center'}}>
          <MaterialIcons name="settings" size={24} color="black" />
        <Text>Settings</Text>
        </TouchableOpacity>
        </View>
        

        
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 5,
  },
  container1: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 15, // Makes it circular
    borderWidth: 1,
    borderColor: '#eee',
  },
  notificationIcon: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  container2: {
    flex: 0.4,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  container3: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden', // Ensures borderRadius works on ImageBackground
  },
  bannerImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  container4: {
    flex: 0.6,
    paddingHorizontal: 10,
    gap: 10,
    margin: 10,
    borderRadius: 15,
  },
  container5: {
    flex: 1,
    gap: 10,
   paddingHorizontal: 10,
    borderRadius: 15,
  },
  container6: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});