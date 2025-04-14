import { Image, StyleSheet, Platform, View, Text, ScrollView, } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Loader from '@/components/Loader';
import UserInfo from '@/components/UserInfo';
import CardSection from '@/components/CardSection';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <UserInfo />
        <CardSection />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    marginTop:50
  },

});
