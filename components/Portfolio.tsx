import { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Loader from "./Loader";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import commonStylesheet from "./commonStylesheet/commonStylesheet";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { portfolioData } from "../features/portfolioData";

const { width, height } = Dimensions.get("window");

const Portfolio = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.portfolioData
  );
  console.log("DATA", data);
  useEffect(() => {
    dispatch(portfolioData());
  }, [dispatch]);
  if (isLoading) return <Loader />;
  return (
    <View style={styles.container}>
      {data ? (
        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <TouchableOpacity>
              <View
                style={[
                  styles.iconCirle,
                  { backgroundColor: "#D3D3D3", marginTop: 10 },
                ]}
              >
                <Ionicons name="wallet" size={20} color="#2F3BAD" />
              </View>
            </TouchableOpacity>
            <View style={{ marginLeft: -50 }}>
              <Text style={styles.portfolioCardHeder}>$ {data?.balance}</Text>
              <Text
                style={[commonStylesheet.cardRegularText, { color: "gray" }]}
              >
                Wallet Balance
              </Text>
            </View>
            <View style={{marginTop:15}}>
              <TouchableOpacity>
                <Ionicons name="arrow-forward-circle" size={35} color="#aaa" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dottedLine} />
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.portfolioCardHeder2}>
                {moment(data?.auto_fill_date).format("Do MMMM YYYY")}
              </Text>
              <Text style={commonStylesheet.regularText}>Auto fill date</Text>
            </View>
            <View style={styles.verticalLine} />

            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.portfolioCardHeder2}>
                $ {data.auto_fill_amount}
              </Text>
              <Text style={commonStylesheet.regularText}>Auto fill amount</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  cardContainer: {
    width: "95%",
    height: "auto",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  iconCirle: {
    width: 40,
    height: 40,
    backgroundColor: "#2F3BAD",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioCardHeder: {
    color: "#566DFB",
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  portfolioCardHeder2: {
    color: "#566DFB",
    fontSize: 15,
    fontFamily: "Poppins-Bold",
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    borderStyle: "dotted",
    marginVertical: 10,
  },
  verticalLine: {
    width: 1,
    height: 50,
    backgroundColor: "#aaa",
    marginHorizontal: 10,
  },
});

export default Portfolio;
