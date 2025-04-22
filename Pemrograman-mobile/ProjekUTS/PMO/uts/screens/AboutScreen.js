import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

export default function AboutScreen() {
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/thriftbill.id'); // ganti dengan akunmu
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/shirt-1.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Tentang THRIFTBILL</Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>THRIFTBILL</Text> adalah platform belanja online baju thrift terpercaya di Indonesia sejak 2025.
        {'\n\n'}
        Kami menyediakan:
        {'\n'}✔️ Kaos polos berkualitas
        {'\n'}✔️ Jaket dan hoodie trendi
        {'\n'}✔️ Kemeja formal dan kasual
        {'\n\n'}
        Semua produk dikurasi dengan detail dan dikemas secara higienis. Kami percaya fashion tak harus mahal.
      </Text>

      <Text style={styles.subheading}>Kenapa Pilih Kami?</Text>
      <View style={styles.featureBox}>
        <Text>🚚 Pengiriman cepat & aman</Text>
        <Text>💬 Layanan pelanggan responsif</Text>
        <Text>💯 Kualitas barang dijamin</Text>
      </View>

      <TouchableOpacity style={styles.igButton} onPress={openInstagram}>
        <Text style={styles.igButtonText}>🌐 Kunjungi Instagram Kami</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 600,
    height: 1000,
    marginBottom: 16,
    borderRadius: 20,
    position: 'absolute',
    top: -350,

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 20,
  },
  bold: { fontWeight: 'bold' },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  featureBox: {
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  igButton: {
    backgroundColor: '#E1306C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  igButtonText: {
    color: '//#endregion',
    fontWeight: 'bold',
  },
});