import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from "expo-updates";
import { useEffect } from 'react';


export default function App() {

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    onFetchUpdateAsync
  }, [])

  return (
    <View style={styles.container}>
    
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//https://zxictdejzaimgsigyrif.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aWN0ZGVqemFpbWdzaWd5cmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjg0NTUsImV4cCI6MjAxNzgwNDQ1NX0.IhxPYcQ87YaZH9Kp7zRNFMrEIArEkujICGi-acybOXM