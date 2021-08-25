import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { Header, Contents, Footer } from './components/Layout';


const App = () => {
    return (
    <View style={viewStyles.container}>
        <Header/>
        <Contents/>
        <Footer/>
    </View>
    );
};

/*const App = () => {
    return (
        <View style={viewStyles.container}>
            <Text style={[textStyles.text, { color: 'green'}]}>
                Inline Styling - Text
            </Text>
            <Text style={[textStyles.text, textStyles.error]}>
                Inline Styling - error
            </Text>
        </View>
    );
};*/

/*const container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;
*/
/*const App = () => {
    return (
        <Container>
            <Button title="Hanbit" />
            <Button title="ReactNative" />
        </Container>
    );
};*/
export default App;