import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: blue;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Text>Test</Text>
      <TextNew>NEW TEST</TextNew>
    </SafeAreaView>
  );
};

export default App;
