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

export default function Activities() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Activities this week</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { color: "#E24E58", fontSize: 20 }]}>
              136
            </Text>
            <Text
              style={[
                styles.cardText,
                { color: "#E24E58", fontSize: 10, margin: 10 },
              ]}
            >
              Calls
            </Text>
            <Text
              style={[
                styles.cardText,
                { color: "#E24E58", fontSize: 10, margin: 10 },
              ]}
            >
              {" "}
              ▼-7.6%
            </Text>
          </View>
          <Text style={[commonStylesheet.regularText, { fontSize: 12 }]}>
            Avg. 26 calls per day
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Activities this month</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.cardText, { color: "#34B549", fontSize: 20 }]}>
              136
            </Text>
            <Text
              style={[
                styles.cardText,
                { color: "#34B549", fontSize: 10, margin: 10 },
              ]}
            >
              Calls
            </Text>
            <Text
              style={[
                styles.cardText,
                { color: "#34B549", fontSize: 10, margin: 10 },
              ]}
            >
              {" "}
              ▲ 10.6%
            </Text>
          </View>
          <Text style={[commonStylesheet.regularText, { fontSize: 12 }]}>
            Avg. 146 calls per week
          </Text>
        </View>
      </View>
      <View style={styles.screenCenter}>
        <View style={styles.taskCompletioncontainer}>
          <Progress.Circle
            progress={0.76}
            size={80}
            showsText={true}
            formatText={() => "76 %"}
            color="#fff"
            borderWidth={3}
            unfilledColor="rgba(255,255,255,0.3)"
            textStyle={{ color: "#fff", fontFamily: "Poppins-Bold" }}
          />
          <View style={styles.textBlock}>
            <Text style={[commonStylesheet.cardRegularText, styles.titleText]}>
              Overall Task Completion
            </Text>
            <Text style={[commonStylesheet.cardRegularText, styles.subText]}>
              Achievements against total calls targeted for most of the
              September.
            </Text>
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
    fontSize: 12,
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
  textBlock: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Poppins-Bold",
    textAlign: "left",
    lineHeight: 20,
    marginBottom: 4,
  },
  subText: {
    fontSize: 12,
    color: "#fff",
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    lineHeight: 18,
  },
});
