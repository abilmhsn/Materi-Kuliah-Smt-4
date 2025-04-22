// screens/ProductListScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const splashImage = require('../assets/shirt-1.jpg');

const products = [
  {
    id: '1',
    name: 'Kaos Polos',
    price: 'Rp 50.000',
    image: splashImage,
  },
  {
    id: '2',
    name: 'Kemeja Flanel',
    price: 'Rp 120.000',
    image: splashImage,
  },
  {
    id: '3',
    name: 'Jaket Hoodie',
    price: 'Rp 200.000',
    image: splashImage,
  },
];

export default function ProductListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate('Order', { product: item })}
      >
        <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Produk</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  list: { paddingHorizontal: 20 },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: { width: 250, height: 200, borderRadius: 12, marginBottom: 12 },
  name: { fontSize: 18, fontWeight: '600' },
  price: { fontSize: 16, color: '#555', marginBottom: 8 },
  orderButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  orderButtonText: { color: '#fff', fontWeight: 'bold' },
});
