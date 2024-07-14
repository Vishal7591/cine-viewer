import React, { Component, useState, useEffect, FC } from "react";
import { connect, useDispatch } from "react-redux";
import * as config from "./../../constants/config";
import * as genericStyles from '../../styles/main';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
  RefreshControl,
  Platform
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Movie } from "../../types/item/itemTypes";
import { fetchMovies } from "../../slice/movieSlice";


export const MoviesDashboard: FC=({navigation}: any)=>{
  const dispatch = useDispatch<any>();
   const [moviesData, setMoviesData] = useState<Array<Movie>>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [refreshing, setRefreshing] = useState<boolean>(false);

   useEffect(()=>{
    setLoading(true);
    const data = dispatch(fetchMovies());
    data.then((response: any) => {
      setMoviesData(response.payload);
      // setProductsCopy(response.payload);
      setLoading(false);
    });
   },[dispatch])

    return(
        <View style={styles.container}>
          <View style={styles.topMenu}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              {/* {starIcon} */}
              <MaterialIcons name="star" size={26} color="#fff" />
              <Text
                style={[
                  genericStyles.styles.boldText,
                  {
                    fontSize: 17,
                    paddingTop: Platform.OS === "android" ? 5 : 0
                  }
                ]}
              >
                {" "}
                TOP 10 PICKS AROUND YOU
              </Text>
            </View>
            {/* {this.state.cityName !== "" && (
              <Text style={[genericStyles.styles.boldText, { fontSize: 17 }]}>
                You're in {this.state.cityName}
              </Text>
            )} */}
          </View>
          {moviesData && moviesData.length < 1 && (
            <View style={genericStyles.styles.noMoviesFoundSection}>
              {/* {sadIcon} */}
              <FontAwesome5 name="sad-tear" size={50} color="#fff" />
              <Text
                style={[
                  genericStyles.styles.boldText,
                  {
                    fontSize: 20,
                    paddingTop: 10
                  }
                ]}
              >
                SORRY, NO MOVIES FOUND !!
              </Text>
            </View>
          )}
          <FlatList
            data={moviesData}
            keyExtractor={(item: any) => item.id.toString()}
            nestedScrollEnabled={true}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => setRefreshing(true)}
              />
            }
            renderItem={({ item, index: number }) => (
              <TouchableOpacity
                style={genericStyles.styles.movieTile}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate("Details", {
                    movieDetails: item
                  }
                )
                }
              >
                <View style={styles.imageSection}>
                  <Image
                    style={styles.imagePoster}
                    source={{
                      uri: `${config.IMAGE_BASE_URI}${item.poster_path}`
                    }}
                  />
                </View>
                <View style={styles.descriptionPanel}>
                  <View style={{ flex: 1 }}>
                    <Text style={[genericStyles.styles.boldText, { fontSize: 17 }]}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={genericStyles.styles.regularText}>
                      Released On-
                      {" " +
                        new Date(item.release_date??"").toString().substring(4, 15)}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={genericStyles.styles.boldText}>
                      Rated-
                      {item.adult ? "A" : "U/A"}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      {/* {favouriteIcon} */}
                      <MaterialIcons name="favorite" size={20} color="red" />
                      <Text style={genericStyles.styles.regularText}>
                        {" " + item.vote_average} - IMDB
                      </Text>
                    </View>

                    <TouchableOpacity
                      activeOpacity={1}
                      // onPress={async () => {
                      //   moviesData[index].localFavourite = !moviesData[index].localFavourite;
                      //   this.state.moviesData[index].vote_count = this.state
                      //     .moviesData[index].localFavourite
                      //     ? item.vote_count + 1
                      //     : item.vote_count - 1;
                      //   await AsyncStorage.setItem(
                      //     config.LOCAL_MOVIES_DATA,
                      //     JSON.stringify(this.state.moviesData)
                      //   );
                      //   setMoviesData([...moviesData]
                      //   );
                      // }}
                      style={styles.votesSection}
                    >
                      {/* {likeIcon} */}
                      <AntDesign
                        name="like1"
                        size={20}
                        color={ "#fff"}
                      />
                      <Text style={genericStyles.styles.regularText}>
                        {item.vote_count}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        {loading && (
            <View style={genericStyles.styles.loading}>
              <ActivityIndicator size="large" color="#dcdcdc" />
              <Text style={[genericStyles.styles.screenLoadingText]}>
                Please Wait...
              </Text>
            </View>
          )}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3060B0"
  },
  votesSection: {
    flex: 1,
    alignItems: "flex-end",
    bottom: 20,
    right: 8
  },
  topMenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    flexDirection: "column"
  },
  descriptionPanel: {
    flex: 5,
    flexDirection: "column"
  },
  imageSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    overflow:"hidden"
  },
  imagePoster: {
    borderRadius: 20,
    height: 100,
    width: 180,
    resizeMode: "contain"
  }
});
