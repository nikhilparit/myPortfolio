import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Loader from "@/components/Loader";
import UserInfo from "@/components/UserInfo";
import CardSection from "@/components/CardSection";
import Portfolio from "@/components/Portfolio";
import Activities from "@/components/Activities";
import MenuTabs from "@/components/MenuTabs";
import MenuCard from "@/components/MenuCard";
import ActivitiesChart from "@/components/ActivitiesChart";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <UserInfo />
        <CardSection />
        <Portfolio />
        <Activities />
        <MenuTabs />
        <MenuCard/>
        <ActivitiesChart/>
        <View style={{ height: 60 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    marginTop: 50,
  },
});
