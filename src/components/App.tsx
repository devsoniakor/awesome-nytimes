import React from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import { Router } from "@reach/router"
import ArticleList from './ArticleList/ArticleList';
import { Article } from '../api/models';
import article from '../components/article_sample.json';
import { NYTimesAPI } from '../api/nytimesApi';


function App() {
  let items: Article[] = [];
  let item: Article = article;
  items.push(item);
  items.push(item);
  items.push(item);
  const api: NYTimesAPI = NYTimesAPI.Instance;
  let queryNews = (query: string) => {
    // api.getNews(event.target.query.value);
    console.log('received', query);
  }

  return (
    <div className="container">
      <SearchBar searchArticle={queryNews}></SearchBar>
      <Router>
        <ArticleList path="/" items={items} />
      </Router>
    </div>

  );
}

export default App;
