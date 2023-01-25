import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { CartContextProvider } from './src/contexts/CartContext';
import { Routes } from './src/routes';
import { THEME } from './src/theme';

OneSignal.setAppId('e8a87125-0de6-4085-aa90-21c82d7ce418')

OneSignal.setEmail('lpiresjunior@gmail.com')

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}