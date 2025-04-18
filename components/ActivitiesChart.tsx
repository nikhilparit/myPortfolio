import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LineChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Circle } from "react-native-svg";
import { Ionicons } from '@expo/vector-icons'; 
import commonStylesheet from "./commonStylesheet/commonStylesheet";

type CustomDotsProps = {
  x: (index: number) => number;
  y: (value: number) => number;
  data: number[];
  color: string;
};

const CustomDots: React.FC<CustomDotsProps> = ({ x, y, data, color }) => {
  return (
    <>
      {data.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          stroke={color}
          fill="white"
        />
      ))}
    </>
  );
};

const ActivitiesChart: React.FC = () => {
  const currentMonth: number[] = [50, 10, 40, 95, 85, 91, 35];
  const previousMonth: number[] = [30, 20, 10, 40, 30, 50, 70];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={[commonStylesheet.primaryHeader,{fontSize:15}]}>September Activities</Text>
        <Text style={styles.legend}>
          <Text style={[styles.dot, { color: "#8A56F7",fontFamily:'Poppins-Regular' }]}>●</Text> Current
          Month{"   "}
          <Text style={[styles.dot, { color: "#4AD4E8",fontFamily:'Poppins-Regular' }]}>●</Text> Previous
          Month
        </Text>
        <TouchableOpacity style={styles.iconButton}>
          <View style={{marginTop:10}}>
              <TouchableOpacity>
                <Ionicons name="arrow-forward-circle" size={30} color="#aaa" />
              </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>

      <LineChart
        style={{ height: 180 }}
        data={currentMonth}
        svg={{ stroke: "#8A56F7", strokeWidth: 2 }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveMonotoneX}
      >
        <Grid />
        <CustomDots
          data={currentMonth}
          color="#8A56F7"
          x={() => 0}
          y={() => 0}
        />
      </LineChart>

      <LineChart
        style={StyleSheet.absoluteFill}
        data={previousMonth}
        svg={{ stroke: "#4AD4E8", strokeWidth: 2 }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveMonotoneX}
      >
        <CustomDots
          data={previousMonth}
          color="#4AD4E8"
          x={() => 0}
          y={() => 0}
        />
      </LineChart>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  legend: {
    fontSize: 12,
    color: "#666",
  },
  dot: {
    fontSize: 16,
  },
  iconButton: {
    marginLeft: 'auto',
    padding: 0,
    marginTop:-40
  },
});

export default ActivitiesChart;
