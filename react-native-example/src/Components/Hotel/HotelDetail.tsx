import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { renderStarRate } from '../Icons/Star';
import LocationIcon from '../Icons/Location';

import { HotelType } from '../../Entities/Hotel';
import HotelStyles from './Styles';

export default function HotelDetail({name, stars, ubication, ubicationImage}: HotelType) {
    return (
        <View style={styles.Container}>
            <View style={styles.HotelInformation}>
                <Text style={HotelStyles.HotelName}>{name}</Text>
                {renderStarRate(stars)}
                <View style={styles.UbicationDetail}>
                    <LocationIcon />
                    <Text style={styles.UbicationText}>{ubication}</Text>
                </View>
            </View>
            <View style={styles.UbicationImage}>
                <Image
                    style={styles.UbicationImage}
                    source={{
                        uri: ubicationImage
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "white",
        borderRadius: 5
    },
    HotelInformation: {
        padding: 10
    },
    UbicationImage: {
        width: "100%",
        height: 150,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    UbicationDetail: {
        marginLeft: 15,
        marginTop: 5,
        flexDirection: 'row'
    },
    UbicationText: {
        marginLeft: 5
    }
});