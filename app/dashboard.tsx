import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: "https://tse4.mm.bing.net/th/id/OIP.Gz62k7vTQNxqkz9Q6yE4NgHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3" }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.greetingText}>Good morning</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
        </View>
        <View style={styles.notificationIcon}>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <MaterialIcons name="search" size={20} color="gray" />
              <TextInput 
                placeholder="Search" 
                style={styles.searchInput} 
                placeholderTextColor="gray"
              />
              <MaterialIcons name="filter-alt" size={20} color="gray" />
            </View>
          </View>

          {/* Banner Image */}
          <View style={styles.bannerContainer}>
            <ImageBackground
              source={{ uri: "https://i.ytimg.com/vi/Kxr89dmvPNA/maxresdefault.jpg" }}
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </View>

          {/* Experiences Section */}
          <View style={styles.experiencesContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Experiences</Text>
              <Text style={styles.viewAllText}>View all</Text>
            </View>
            <View style={styles.experienceIconsContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons name='music-video' size={44} color="black" />
                <Text style={styles.iconLabel}>Music</Text>
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name='fastfood' size={44} color="black" />
                <Text style={styles.iconLabel}>Food</Text>
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name='sports-bar' size={44} color="black" />
                <Text style={styles.iconLabel}>Dance</Text>
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name='school' size={44} color="black" />
                <Text style={styles.iconLabel}>Education</Text>
              </View>
            </View>
          </View>

          {/* Workshops Section */}
          <View style={styles.workshopsContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Workshops</Text>
            </View>
            <ImageBackground 
              source={{ uri: "https://i.ytimg.com/vi/Kxr89dmvPNA/maxresdefault.jpg" }}
              style={styles.workshopImage}
            />
          </View>
          <View style={styles.workshopsContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Workshops</Text>
            </View>
            <ImageBackground 
              source={{ uri: "https://i.ytimg.com/vi/Kxr89dmvPNA/maxresdefault.jpg" }}
              style={styles.workshopImage}
            />
          </View>
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.navButtonsContainer}>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="home" size={24} color="black" />
            <Text style={styles.navButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="search" size={24} color="black" />
            <Text style={styles.navButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add-circle" size={54} color="black" />
        </TouchableOpacity>
        
        <View style={styles.navButtonsContainer}>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="person" size={24} color="black" />
            <Text style={styles.navButtonText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="settings" size={24} color="black" />
            <Text style={styles.navButtonText}>Settings</Text>
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
    paddingHorizontal: 10,
  },
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  profileContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
  greetingText: {
    color: 'gray',
    fontSize: 14,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
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
  contentContainer: {
    flex: 1,
    marginBottom: 40,
  },
  searchContainer: {
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 12,
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
    color: 'black',
  },
  bannerContainer: {
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  bannerImage: {
    height: '100%',
    width: '100%',
  },
  experiencesContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: 'gray',
  },
  experienceIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 14,
  },
  workshopsContainer: {
    height: 200,
    backgroundColor: 'skyblue',
    borderRadius: 15,
    padding: 15,
    marginBottom: 45,

  },
  workshopImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navButtonsContainer: {
    flexDirection: 'row',
    gap: 40,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    marginLeft: -27,
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});