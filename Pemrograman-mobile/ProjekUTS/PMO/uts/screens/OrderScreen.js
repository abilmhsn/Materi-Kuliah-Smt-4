// screens/OrderScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function OrderScreen() {
  const handleOrder = () => {
    Alert.alert('Pesanan Diterima', 'Pesanan baju Anda sedang diproses!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesan Baju</Text>
      <Text style={styles.item}>🧥 Jaket Hoodie</Text>
      <Text style={styles.item}>👕 Kaos Polos</Text>
      <Text style={styles.item}>👔 Kemeja Slimfit</Text>
      <Button title="Pesan Sekarang" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  item: { fontSize: 18, marginBottom: 10 },
});
