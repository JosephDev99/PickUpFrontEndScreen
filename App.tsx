import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
      <Navigation />
    </SafeAreaProvider>
  );
}
