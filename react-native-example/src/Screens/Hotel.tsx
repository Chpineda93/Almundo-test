import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import HotelDetail from '../Components/Hotel/HotelDetail';
import { HotelType } from '../Entities/Hotel';
import { getHotel } from '../Api/HotelApi';

type Props = {
    navigation: NavigationStackProp<{ hotelId: string }>
}

type StateProps = {
    hotel: HotelType
}

export default class Hotel extends React.Component<Props> {
    static navigationOptions = {
        title: 'Hotel Detail'
    }

    state : StateProps = {
        hotel: null
    }

    getHotelFromApi(hotelId) {
        getHotel(hotelId)
            .then((response) => response.json())
            .then((hotel) => this.setState({hotel: hotel[0]}))
    }

    componentDidMount() {
        const { getParam } = this.props.navigation;
        const hotelId: number  = getParam('hotel', 'not found');
        this.getHotelFromApi(hotelId);
    }

    render() {
        return (
            <View style={{backgroundColor: "#f1f1f1", padding: 10, minHeight: "100%"}}>
                {this.state.hotel ? <HotelDetail {...this.state.hotel} /> : <Text>Cargando...</Text>}
            </View>
        )
    }
}