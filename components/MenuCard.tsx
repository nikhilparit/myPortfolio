import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Dimensions,
} from "react-native";
import commonStylesheet from "./commonStylesheet/commonStylesheet";
import * as Progress from "react-native-progress";
const { width } = Dimensions.get("window");

export default function MenuCard() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Lead Generation Campaign</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[commonStylesheet.regularText, { fontSize: 12 }]}>
              Tips on increasing your go forward, Click on bell icon for
              notifications
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Progress.Bar progress={0.5} width={150} color="#566DFB" />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.progressBarText}>343</Text>
              <Text style={styles.progressBarText}>368</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[commonStylesheet.regularText,{ fontSize: 12 }]}>Complate</Text>
              <Text style={[commonStylesheet.regularText,{ fontSize: 12 }]}>Pending</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Product Launch Marketing</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[commonStylesheet.regularText, { fontSize: 12 }]}>
              Tips on increasing your go forward, Click on bell icon for
              notifications
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Progress.Bar progress={0.7} width={150} color="#566DFB" />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.progressBarText}>488</Text>
              <Text style={styles.progressBarText}>105</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[commonStylesheet.regularText,{ fontSize: 12 }]}>Complate</Text>
              <Text style={[commonStylesheet.regularText,{ fontSize: 12 }]}>Pending</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fffff",
  },
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#566DFB",
    fontFamily: "Poppins-Bold",
  },
  taskCompletioncontainer: {
    width: "95%",
    backgroundColor: "#566DFB",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
  },
  screenCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  progressBarText: {
    fontSize: 14,
    color: "#566DFB",
    fontFamily: "Poppins-Bold",
  },
});
