import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ActionButtons } from "../../components/ActionButtons";
import { CountdownTimer } from "../../components/CountdownTimer";
import { Header } from "../../components/Header";
import { Statistics } from "../../components/Statistics";
import Colors from "../../constants/Colors";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      <Header name="John" scans="50+" tickets={124} />

      <View style={styles.separator} />

      <Text style={styles.instructionText}>
        It’s simple, to win the following prizes, all you need is to:
      </Text>

      <ActionButtons />

      <CountdownTimer />

      <Statistics />

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background, 
  },
  content: {
    paddingHorizontal: 20, 
    paddingTop: 20, 
    paddingBottom: 40,
  },
  separator: {
    height: 1, 
    backgroundColor: '#EAEAEA', 
    width: '100%', 
  },
  instructionText: {
    fontSize: 14,
    color: '#555555', 
    marginBottom: 15, 
    marginTop: 15, 
    textAlign: "center",
  }
});
