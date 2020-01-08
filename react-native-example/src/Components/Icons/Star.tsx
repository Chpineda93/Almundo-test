import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StarIcon() {
    return (
        <Ionicons
            color="#f9cd4d"
            name="md-star"
            size={25}
        />
    )
}

export function renderStarRate(stars: number) {

    let starsIcons = [];

    for (let index = 1; index <= 4; index++) {
        let defaultColor = "#f9cd4d";
        if (stars < index) {
            defaultColor = "#f1f1f1";
        }
        starsIcons.push(
            <Ionicons
                key={index}
                color={defaultColor}
                name="md-star"
                size={25} />
        )
    }

    return (
        <View style={{flexDirection: "row"}}>
            {starsIcons}
        </View>
    )

}