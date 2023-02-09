import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Basket from './src/screens/Basket';
import mock from './src/mocks/basket'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [font] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  })

  if(!font) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Basket {...mock}/>
    </SafeAreaView>
  );
}

