import { Image, StyleSheet } from "react-native";
import React, { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export interface IconProps {
  size: number;
  name: string;
  title: string;
  color: string;
}

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#3060B0"
    },
    rowSection:{
      flex:1,
      flexDirection:"row"
    },
    votesSection: {
      flex: 1,
      alignItems: "flex-end",
      bottom: 20,
      right: 8
    },
    topMenu: {
      alignItems: "center",
      justifyContent: "center",
      height: 120,
      backgroundColor:"#c0c0c0",
      flexDirection: "column"
    },
    descriptionPanel: {
      flex: 5,
      paddingLeft:20,
      flexDirection: "column"
    },
    textInput: {
      color: "#fff",
      borderWidth: 2,
      borderColor: "#159689",
      height: 50,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      width: "100%",
      fontFamily: "Roboto-Medium",
      fontSize: 17
    },
    imageSection: {
      flex: 2,
      alignItems: "center",
      overflow:"hidden",
      justifyContent: "center"
    },
    imagePoster: {
      borderRadius: 20,
      height: "100%",
      width: "100%",
      resizeMode: "contain"
    },
    loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#fff",
        opacity:0.8,
        color: "#000",
      },
      loadingText: {
        textAlign: "center",
        color: "#dcdcdc",
        fontSize: 15
      },
      screenLoadingText: {
        textAlign: "center",
        color: "#000",
        fontSize: 17
      },
      regularText: {
        color: "#fff",
        fontSize: 15,
      },
      noProductsFoundSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "20%",
        flexDirection: "column"
      },
      secondaryText:{
        color:"#00ffbf"
      },
      ratingsText:{
        color:"#ffd700"
      },
      productTile: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#000",
        padding: 5,
        marginVertical: 3,
        marginHorizontal: 5,
        height: 120,
        borderRadius: 10
      },
      ratingsSection:{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        flexDirection: "column"
      },
      bannerSection: {
        flex: 2,
        justifyContent: "center",
        flexDirection: "row"
      },
      releasedSection: {
        flex: 1,
        justifyContent: "center",
        bottom: 20,
        alignItems: "center"
      },
      overviewSection: {
        flex: 1,
        marginTop: "10%",
        justifyContent: "center",
        paddingHorizontal: 10,
        flexDirection: "column"
      },
      priceSection: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        flexDirection: "column"
      },
      searchInput:{
        borderColor:"#4a4a4a",
        width:"90%",
        alignSelf:"center",
        borderWidth:1,
        borderRadius:5,
        height:45,
        marginTop:10,
        color:"#000",
        fontSize:17,
        paddingHorizontal:5
      },
      noMoviesFoundSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "20%",
        flexDirection: "column"
      },
      boldText: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Roboto-Bold"
      },
      movieTile: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#000",
        padding: 5,
        marginVertical: 3,
        marginHorizontal: 5,
        height: 120,
        borderRadius: 10
      }
  });

  export const likeIcon = AntDesign.getImageSourceSync('like1', 20, 'white');
    export const favouriteIcon = MaterialIcons.getImageSourceSync('favorite', 20, 'red');
  export const starIcon = MaterialIcons.getImageSourceSync('star', 26, 'white');
  export const sadIcon = FontAwesome5.getImageSourceSync('sad-tear', 50, 'white')

  // export const likeIcon = <Image source={{uri:like.uri}} style={{height: 20, width: 20}}/>;
  
  // export const favouriteIcon = (
  //   <MaterialIcons name="favorite" title="Favourite" size={20} color="red" />
  // );
  
  // export const starIcon = (
  //   <MaterialIcons name="star" title="Star" size={26} color="#fff" />
  // );
  
  // export const sadIcon = (
  //   <FontAwesome5 name="sad-tear" title="Sad" size={50} color="#fff" />
  // );