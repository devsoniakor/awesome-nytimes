import React from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import { Router } from "@reach/router"
import ArticleList from './ArticleList/ArticleList';
import { Article } from './NewsItem/NewsItemModel';
import article from '../components/article_sample.json';


function App() {
  let items: Article[] = [];
  let item: Article = article;
  items.push(item);
  items.push(item);
  items.push(item);
  return (
    <div className="container">
      <SearchBar></SearchBar>
      <Router>
        <ArticleList path="/" items={items} />
      </Router>
    </div>

  );
}

export default App;
