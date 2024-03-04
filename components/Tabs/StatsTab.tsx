import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const StatTab = () => {
  // demonstration purposes for now, can be tracked later once we connect to nodes
  const downloadData = [
    {date: '2022-03-01', value: 100},
    {date: '2022-03-02', value: 150},
    {date: '2022-03-03', value: 200},
    {date: '2022-03-04', value: 180},
    {date: '2022-03-05', value: 250},
    {date: '2022-03-06', value: 300},
    {date: '2022-03-07', value: 280},
  ];

  const totalDownloadedData = downloadData.reduce(
    (total, data) => total + data.value,
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <Text>Total Downloaded Data: {totalDownloadedData} MB</Text>
      </View>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: downloadData.map(data => data.date),
            datasets: [
              {
                data: downloadData.map(data => data.value),
              },
            ],
          }}
          width={300}
          height={200}
          yAxisSuffix=" MB"
          chartConfig={{
            backgroundColor: '#e3f2fd',
            backgroundGradientFrom: '#90caf9',
            backgroundGradientTo: '#64b5f6',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    marginBottom: 20,
  },
  chartContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default StatTab;
