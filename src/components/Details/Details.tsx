import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import * as genericStyles from '../../styles/main';
import {Heading} from '../Heading';
import * as config from '../../constants/config';
import {Movie} from '../../types/item/itemTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Details: React.FC = ({route, navigation}: any) => {
  const [movieData, setMovieData] = useState<Movie>({} as Movie);
  const [genreNames, setGenreNames] = useState<Array<any>>([]);

  const {movieDetails} = route.params;

  useEffect(() => {
    const genreIds: Array<number> = movieData.genre_ids ?? [];
    const genres: Array<string> = [];
    for (var i = 0; i < genreIds.length; i++) {
      genres.push(
        config.genres.find(item => item.id == genreIds[i])?.name ?? '',
      );
    }
    setMovieData(movieDetails);
    setGenreNames(genres);
  }, [movieDetails]);

  useEffect(() => {
    navigation.setOptions({
      title: movieDetails.title,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={[styles.container]}>
        <View style={styles.titleSection}>
          <View style={styles.movieSection}>
            <View style={styles.posterSection}>
              <Image
                style={styles.imagePoster}
                source={{
                  uri: `${config.IMAGE_BASE_URI}${movieData.backdrop_path}`,
                }}
              />
            </View>
            <View style={styles.movieTitleSection}>
              <Text
                style={[
                  genericStyles.styles.boldText,
                  {fontSize: 20, flexWrap: 'wrap'},
                ]}>
                {movieData.original_title}
              </Text>
              <Text style={[genericStyles.styles.regularText, {fontSize: 17}]}>
                Rated- {movieData.adult ? 'A' : 'U/A'}
              </Text>
              <Text style={[genericStyles.styles.regularText, {fontSize: 17}]}>
                Language- {movieData.original_language}
              </Text>
            </View>
          </View>
          <View style={styles.releasedSection}>
            <Text style={[genericStyles.styles.boldText, {fontSize: 17}]}>
              Released On-
              {' ' +
                new Date(movieData.release_date ?? '')
                  .toString()
                  .substring(4, 15)}
            </Text>
          </View>
        </View>

        <View style={styles.overviewSection}>
          {/* <Text style={[genericStyles.styles.boldText, {fontSize: 20}]}>
            Overview
          </Text> */}
          <Heading text={'Overview'} />
          <Text
            style={[
              genericStyles.styles.regularText,
              {fontSize: 16, fontFamily: 'Roboto-Medium'},
            ]}>
            {movieData.overview}
          </Text>
        </View>
        <View style={styles.genresSection}>
          <Heading text={'Genres'} />
          <Text
            style={[
              genericStyles.styles.regularText,
              {fontSize: 16, fontFamily: 'Roboto-Medium'},
            ]}>
            {genreNames.join(', ')}
          </Text>
        </View>
        <View style={styles.ratingsSection}>
          <Heading text={'Ratings'} />
          <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
            <MaterialIcons name="favorite" size={20} color="red" />
            <Text
              style={[
                genericStyles.styles.regularText,
                {fontSize: 16, fontFamily: 'Roboto-Medium'},
              ]}>
              {' ' + movieData.vote_average} - IMDB
            </Text>
            <View style={styles.votesSection}>
              <AntDesign
                name="like1"
                size={24}
                color={movieData.localFavourite ? '#98FB98' : '#fff'}
              />
              <Text
                style={[
                  genericStyles.styles.regularText,
                  {
                    fontSize: 18,
                    paddingTop: Platform.OS === 'android' ? 5 : 0,
                  },
                ]}>
                {' ' + movieData.vote_count}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const discountCalculation = (price: number, discount: number) => {
  return (price - (discount / 100) * price).toFixed(2);
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3060B0',
  },
  posterSection: {
    flex: 1,
    paddingTop: '1%',
    alignContent: 'center',
    // justifyContent: "center",
    padding: 5,
  },
  movieSection: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleSection: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#000',
  },
  imageSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieTitleSection: {
    flex: 1,
    paddingLeft: Platform.OS === 'android' ? 10 : 5,
    // alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imagePoster: {
    height: 240,
    width: 180,
    resizeMode: 'contain',
  },
  ratingsSection: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'column',
  },
  votesSection: {
    flex: 1,
    paddingLeft: 80,
    flexDirection: 'row',
  },
  genresSection: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'column',
  },
  overviewSection: {
    flex: 1,
    marginTop: '10%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  releasedSection: {
    flex: 1,
    justifyContent: 'center',
    bottom: 20,
    alignItems: 'center',
  },
});
