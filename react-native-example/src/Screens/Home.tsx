import React from 'react';
import { 
    View,
    TouchableHighlight,
    Button,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { HotelType } from '../Entities/Hotel';
import HotelCard from '../Components/Hotel/HotelCard';
import { getHotels } from '../Api/HotelApi';
import TextInput from '../Components/Form/TextInput';


type Props = {
    navigation: NavigationStackProp
}

export default class HomeScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Lista de Hoteles'
    }

    state = {
        search: "",
        hotels: []
    }

    getHotelsFromApi = () => {
        getHotels({search: this.state.search})
        .then((response) => response.json())
        .then((hotels) => {
            this.setState({
                hotels: hotels
            })
        }).catch((err) => {
            alert(err)
        })
    }

    componentDidMount() {
        this.getHotelsFromApi();
    }

    renderHotels(hotels, navigate) {

        if (hotels.length === 0) {
            return (
                <View >
                    <Text style={styles.NotFound}>No se encontraron hoteles.</Text>
                </View>
            )
        }
        
        return hotels.map((hotel: HotelType, index) => (
            
                <TouchableHighlight key={index} style={{marginTop: 15}} onPress={() => navigate("Hotel", {hotel: hotel.id}) }>
                <HotelCard
                name={hotel.name}
                stars={hotel.stars}
                price={hotel.price}
                image={hotel.image}
            />
            </TouchableHighlight>
            
        ))
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView >
             <View style={{backgroundColor: "#f1f1f1", padding: 10, minHeight: "100%"}}>
                <TextInput
                    value={this.state.search}
                    onChangeText={text => this.setState({search: text})}
                    placeholder={"Buscar Hotel"}
                />
                <Button title="Buscar" onPress={this.getHotelsFromApi} />
                {this.renderHotels(this.state.hotels, navigate)}
                
             </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    NotFound: {
        fontWeight: "bold",
        marginTop: 25,
        fontSize: 20
    }
})