import React, { useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/api';
import Carousel from 'react-native-anchor-carousel';

const DiscoverScreen = () => {

    const { } = useContext(NewsContext);
    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);


    return (
        <View style={styles.discover}>
            {/*source*/}

            {/* categories*/}
            <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
            <Carousel
                layout={'default'}
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                    style={styles.category}
                    onPress={() => setCategory(item.name)}
                    >
                        <Image source={{ uri: item.pic }} style={styles.categoryImage} />
                        <Text style={{ ...styles.name, color: "white" }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                containerWidth={windowWidth}

                onSnapToItem = {index => setActiveIndex(index)}
                separatorWidth={0}
                itemWidth={windowWidth*0.8}
                inActiveSacle={0.8}
                // activeSlideAligment={"start"}
                // inactiveSlideScale={1}
                // inactiveSlideOpacity={1}

            />
            {/*source*/}
        </View>
    )
}

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
    categoryImage: {
        height: "60%",
        width: "100%",
        resizeMode: "contain",
    },
    name: {
        fontSize: 14,
        textTransform: "capitalize",
    },
});



export default DiscoverScreen;