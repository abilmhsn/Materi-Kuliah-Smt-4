import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    try {
      const data = await AsyncStorage.getItem('user');
      const savedUser = JSON.parse(data);

      if (savedUser && email === savedUser.email && password === savedUser.password) {
        Alert.alert('Selamat Datang', `Halo, ${savedUser.name}`);
        resetForm();

        // Navigasi ke tab "My Product" lalu ke screen "Order"
        navigation.navigate('My Product', {
          screen: 'Order',
        });
      } else {
        Alert.alert('Gagal', 'Email atau password salah');
      }
    } catch (err) {
      Alert.alert('Gagal', 'Terjadi kesalahan saat login');
    }
  };

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Semua field harus diisi!');
      return;
    }

    try {
      const userData = { name, email, password };
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      Alert.alert('Berhasil', 'Akun berhasil dibuat!');
      resetForm();
      setIsRegister(false);

      // Navigasi ke tab "My Product" lalu ke screen "Order"
      navigation.navigate('My Product', {
        screen: 'Order',
      });
    } catch (err) {
      Alert.alert('Gagal', 'Terjadi kesalahan saat menyimpan data');
    }
  };

  return (
    <View style={styles.container}>
      {!isRegister ? (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Button title="LOGIN" onPress={handleLogin} />
          <TouchableOpacity
            onPress={() => {
              setIsRegister(true);
              resetForm();
            }}>
            <Text style={styles.linkText}>BELUM PUNYA AKUN? DAFTAR DISINI</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Register</Text>
          <TextInput
            placeholder="Nama Lengkap"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Register" onPress={handleRegister} />
          <TouchableOpacity
            onPress={() => {
              setIsRegister(false);
              resetForm();
            }}>
            <Text style={styles.linkText}>Sudah punya akun? Login di sini</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  linkText: {
    color: 'red',
    marginTop: 25,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
