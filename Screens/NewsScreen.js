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

    
    const windowWidth=Dimensions.get("window").width

    const carouselRef = React.useRef(null);

    function handleCarouselScrollEnd(item, index) {
        setActiveIndex(index)
    }

    return (
        <View style={styles.view}>
            {
                articles && (
                    <Carousel
                    style={styles.carousel}
                    //layout = {'default'}
                    data = {articles.slice(0,10)}
                    //ref={carouselRef}
                    renderItem = {({ item,index }) => (
                        <SingleNews item = {item} index = {index} renderHeight = {0.85}/>
                    )}
                    //onSnapToItem = {index => setActiveIndex(index)}
                    itemWidth={windowWidth}
                    containerWidth={windowWidth} 
                    separatorWidth={windowWidth*0.1}
                    // onScrollEnd = {handleCarouselScrollEnd}
                    // //separatorWidth={0}
                    // //inActiveScale={0.8}
                    />
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "black",
        //transform:[{scaleY:-1}],
        //flexGrow: 0,
        //height: 150,
        //height: 200
    },
    carousel: {
        flex: 1,
        //height: windowHeight,
        
    },
});

export default NewsScreen;