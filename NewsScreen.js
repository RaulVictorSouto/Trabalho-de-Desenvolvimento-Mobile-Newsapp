import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import styles from "./Stylepage";


  function NewsScreen() {


  const categories = [
    { id: 'general', name: 'Geral', image: require('./images/general.png') },
    { id: 'technology', name: 'Tecnologia', image: require('./images/technology.png') },
    { id: 'sports', name: 'Esportes', image: require('./images/sports.png') },
    { id: 'business', name: 'Negócios', image: require('./images/business.png') },
    { id: 'entertainment', name: 'Entretenimento', image: require('./images/entertainment.png') },
    { id: 'health', name: 'Saúde', image: require('./images/health.png') },
    { id: 'science', name: 'Ciência', image: require('./images/science.png') },
    
  ];

  const [articles, setArticles] = useState([]);
  const [activeCategory] = useState(categories[0].id);

  const CategoryButton = ({ category, onPress }) => {
    return (
      <TouchableOpacity onPress={() => onPress(category.id)} style = {styles.categoriasBox}>
        <Image source={category.image}  style = {styles.categoriasImagem}/>
        <Text style={styles.categoriasText}>{category.name}</Text>
      </TouchableOpacity>
    );
  };

  async function getNews(category) {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=15c0e73d96054f388005a828b0b892b9`
        );
        setArticles(response.data.articles);
        activeCategory(category);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <View>
      <Carousel
        data={categories}
        renderItem={({ item }) => (
          <CategoryButton
            category={item}
            onPress={(category) => getNews(category)} />
        )}
        sliderWidth={415}
        itemWidth={100}
        height = {110}
        backgroundColor ={'#A7BDD9'}
        paddingTop ={10}
        activeSlideAlignment={'start'}
        onSnapToItem={(index) => activeCategory(categories[index].id)} 
       
        />
        <ScrollView style = {styles.scroll}>
      {articles.map((article, index) => (
        
        <TouchableOpacity
    key={index}
    style = {styles.newsBox}
    onPress={() => Linking.openURL(article.url)}>
    <Image style={styles.image} source={{ uri: article.urlToImage }} />
    <Text style={styles.articleTitle}>{article.title}</Text>
    <Text style={styles.articleText}>{article.description}</Text>
  </TouchableOpacity>
      ))}
       </ScrollView>
    </View>
  );
}  



export default NewsScreen;