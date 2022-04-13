// import axios from "axios";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import NewCard from "./src/components/NewCard";
import { Button } from "./src/components/Button";

export default function App() {
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    let apiKey = "67c04eaf11a74a279a667d03b77edfbb"
    let country = "us"
    let website= "newsapi.org"
    fetch(
      `https://${website}/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => setShowCards(data.articles))
      .catch((err) => console.error(err));
  };
  // axios.get("https://reactnative.dev/movies.json")
  //   .then((response) => {
  //     console.log("response", response);
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //   });
  // axios({
  //   method: 'get',
  //   url:'https://newsapi.org/v2/top-headlines?country=in&apiKey=67c04eaf11a74a279a667d03b77edfbb',
  // }).then((response) => {
  //   console.log(response.data);
  // })
  return (
    <View style={styles.container}>
      <View>
        <Button
          color={"#495057"}
          textColor={"white"}
          text={"Fetch New Api"}
          textSize={25}
          fontWeight={"700"}
          style={{ marginTop: 50, height: 50, marginLeft: 12 }}
          onPress={fetchApi}
        />
      </View>
      <View style={styles.container}>
        {/* {
              showCard.map((value,index)=>{
                return (
                  <NewCard
                    key={index}
                    title={value.title}
                    desc={value.description}
                    source={value.source.name}
                    publishedAt={value.publishedAt}
                    // imageUrl={require(value.urlToImage)}
              // style={{ marginVertical: 15, marginHorizontal: 5 }}
                 /> 
                )
              })
            }  */}

        <FlatList
          data={showCards}
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={(showCard) => {
            showCard.source.id;
          }}
          renderItem={({ item,index}) => {
            return (
              <NewCard
              key={index}
                title={item?.title}
                desc={item?.description}
                source={item.source?.name}
                publishedAt={item?.publishedAt}
                imageUrl={item?.urlToImage}
                // style={{ marginVertical: 15, marginHorizontal: 5 }}
              />
            );
          }}
        />
        {/* <NewCard 
            // key={index}
            imageUrl={require('./assets/img/batman.jpg')}
            title={'This is title'}
            desc={'This is Desc'}
            source={'NDTV'}
            publishedAt={'2022'}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE8D6",
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
});
