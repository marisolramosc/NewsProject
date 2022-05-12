import React, { useContext, useState } from 'react'
import {Dimensions, Text, View, StyleSheet} from 'react-native';
//import Carousel from "react-native-snap-carousel";
import Carousel from "react-native-anchor-carousel";
import { NewsContext } from '../API/Context';
import SingleNews from '../components/SingleNews'

const NewsScreen = () => {

    const { 
        news: {articles},
    } = useContext(NewsContext);

    console.log(articles);

    const [activeIndex, setActiveIndex] = useState()

    const windowHeight=Dimensions.get("window").height
    const windowWidth=Dimensions.get("window").width

    return (
        <View style={styles.carousel}>
            {
                articles && (
                    <Carousel
                    //layout = {'stack'}
                    data = {articles.slice(0,10)}
                    containerWidth={windowWidth}
                    //sliderHeight = {300}
                    //itemHeight = {windowHeight}
                    //vertical = {true}
                    renderItem = {({ item,index }) => (
                        <SingleNews item = {item} index = {index}/>
                    )}
                    onSnapToItem = {index => setActiveIndex(index)}
                    separatorWidth={0}
                    />
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: "black",
        transform:[{scaleY:-1}],
    },
});

export default NewsScreen;