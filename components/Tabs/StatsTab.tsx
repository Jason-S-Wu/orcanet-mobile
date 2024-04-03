import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const StatTab = () => {
  const [dataOption, setDataOption] = useState('Months');

  // currently for mock data, but will be replace once connected with nodes
  const monthlyData = [
    {month: 'Jan', value: 100},
    {month: 'Feb', value: 0},
    {month: 'Mar', value: 200},
    {month: 'Apr', value: 120},
    {month: 'May', value: 180},
    {month: 'June', value: 140},
  ];

  const dailyData = [
    {day: 'Tue', value: 0},
    {day: 'Wed', value: 0.1},
    {day: 'Thu', value: 0.12},
    {day: 'Fri', value: 0.9},
    {day: 'Sat', value: 1.1},
    {day: 'Sun', value: 0.8},
  ];

  const data = dataOption === 'Months' ? monthlyData : dailyData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistics</Text>
      <BarChart
        style={styles.graphContainer}
        data={{
          labels: data.map(item => item.month || item.day),
          datasets: [
            {
              data: data.map(item => item.value),
            },
          ],
        }}
        width={400}
        height={300}
        yAxisLabel=""
        yAxisSuffix="GB"
        chartConfig={{
          backgroundColor: '#F5F5F5',
          backgroundGradientFrom: '#F5F5F5',
          backgroundGradientTo: '#F5F5F5',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
      <TouchableOpacity
        onPress={() =>
          setDataOption(dataOption === 'Months' ? 'Days' : 'Months')
        }
        style={styles.switchButton}
      >
        <Text style={styles.switchButtonText}>
          Switch to last 6 {dataOption === 'Months' ? 'Days' : 'Months'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  graphContainer: {
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
  },
  switchButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  switchButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default StatTab;
