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

OneSignal.setAppId('12b395bf-36f7-482d-93ec-990cf4152c17')

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