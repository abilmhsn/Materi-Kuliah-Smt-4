// screens/MyProductScreen.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './ProductListScreen';
import OrderScreen from './OrderScreen';

const Stack = createNativeStackNavigator();

export default function MyProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product List" component={ProductListScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
}
