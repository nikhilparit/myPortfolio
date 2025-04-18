import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState('Recent');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {['Recent', 'All Groups', 'Archived'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="options-outline" size={20} color="#6e6e6e" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuTabs;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#fffff',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: '#4C5DF1',
  },
  tabText: {
    color: '#6e6e6e',
    fontFamily:'Poppins-Bold',
    fontSize:12
  },
  activeTabText: {
    color: '#ffffff',
  },
  iconButton: {
    marginLeft: 'auto',
    padding: 8,
  },
});
