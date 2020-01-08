import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { renderStarRate } from '../Icons/Star';

import HotelStyles from './Styles';

type Props = {
    name: string,
    stars: number,
    price: string,
    image: string
}

export default function HotelCard({ name, stars, price, image }: Props) {

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Image
                    style={styles.HotelImage}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={styles.Footer}>
                <View style={styles.HotelInformation}>
                    <View>
                        <Text style={HotelStyles.HotelName}>{name}</Text>
                    </View>
                    <View style={styles.HotelRate}>
                        {renderStarRate(stars)}
                    </View>
                </View>
                <View style={styles.Price}>
                    <Text>Precio por noche</Text>
                    <Text style={styles.HotelPrice}>{price}</Text>
                </View>
            </View>
        </View>
    )
}

const borderRadius = 5;

const styles = StyleSheet.create({
    HotelImage: {
        width: "100%",
        height: 150,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius
    },
    Container: {
        borderRadius: borderRadius,
        backgroundColor: "white"
    },
    Header: {
        width: "100%",
        height: 150
    },
    Footer: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    HotelInformation: {

    },
    HotelPrice: {
        fontWeight: "bold",
        color: "#f9cd4d"
    },
    Price: {
        alignItems: "flex-end"
    },
    HotelRate: {
        flexDirection: "row"
    }
})
