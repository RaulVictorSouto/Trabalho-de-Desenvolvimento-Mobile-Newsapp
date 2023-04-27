import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';


  function NewsScreen() {


  const categories = [
    { id: 'technology', name: 'Tecnologia', image: require('./images/technology.png') },
    { id: 'sports', name: 'Esportes', image: require('./images/sports.png') },
    { id: 'business', name: 'Negócios', image: require('./images/business.png') },
    { id: 'entertainment', name: 'Entretenimento', image: require('./images/entertainment.png') },
    { id: 'health', name: 'Saúde', image: require('./images/health.png') },
    { id: 'science', name: 'Ciência', image: require('./images/science.png') },
    { id: 'general', name: 'Geral', image: require('./images/general.png') },
  ];

  const [articles, setArticles] = useState([]);
  const [setActiveCategory] = useState(categories[0].id);

  const CategoryButton = ({ category, onPress }) => {
    return (
      <TouchableOpacity onPress={() => onPress(category.id)}>
        <Image source={category.image} style={{ width: 50, height: 50 }} />
        <Text style={{fontSize: 10}}>{category.name}</Text>
      </TouchableOpacity>
    );
  };

  async function getNews(category) {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=15c0e73d96054f388005a828b0b892b9`
        );
        setArticles(response.data.articles);
        setActiveCategory(category);
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <View style={styles.container}>
      <Carousel
        data={categories}
        renderItem={({ item }) => (
          <CategoryButton
            category={item}
            onPress={(category) => getNews(category)} 
            style={styles.categoryButton}/>
        )}
        sliderWidth={500}
        itemWidth={90}
        onSnapToItem={(index) => setActiveCategory(categories[index].id)} />
        <ScrollView style={styles.articlesContainer}>
      {articles.map((article, index) => (
        <View key={index} style={styles.article}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.description}>{article.description}</Text>
        </View>
      ))}
       </ScrollView>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButton: {
    borderRadius: 50,
  },
  articlesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  article: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default NewsScreen;



