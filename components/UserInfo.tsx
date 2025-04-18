import {
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    Dimensions,
  } from 'react-native';
  import { IconSymbol } from './ui/IconSymbol';
  import commonStylesheet from './commonStylesheet/commonStylesheet';
  import { HelloWave } from '@/components/HelloWave';
  
  const { width } = Dimensions.get('window');
  
  export default function UserInfo() {
    return (
      <SafeAreaView style={styles.safeArea}>
          <View style={styles.userInfoContainer}>
            <View style={styles.leftInfo}>
              <Text style={commonStylesheet.primaryHeader}>Hi, Clarence</Text> <HelloWave />
              <View style={styles.userContactDetails}>
                <IconSymbol size={16} name="iphone.gen1" color="gray" />
                <Text style={[commonStylesheet.regularText, { marginLeft: 6 }]}>
                  +91-8668523316
                </Text>
              </View>
            </View>
            <Image
              source={require('../assets/images/user.jpg')}
              style={styles.profilePic}
            />
          </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    userInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 12,
      padding: 16,
    },
    leftInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    userContactDetails: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 6,
    },
    profilePic: {
      width: 70,
      height: 70,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: '#2F3BAD',
    },
  });
  