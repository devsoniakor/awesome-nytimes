import React, { FC } from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import ArticleList from './ArticleList/ArticleList';
import { connect } from 'react-redux';
import { AppState } from '../store/store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { findArticle } from '../thunks';

interface AppProps {
  loadArticles: Function;
}

  const App: FC<AppProps> = ({ loadArticles  }: AppProps) => {

  return (
    <div className="container">
      <SearchBar searchArticle={loadArticles}></SearchBar>
      <Router>
         <Route path="/" component={ArticleList}/>
      </Router>
    </div>
  );
}


const mapStateToProps = (state: AppState) => ({
  articles: state.articles,
  page: state.page,
  query: state.query
});

const mapDispatchToProps = (dispatch: any) => ({
  loadArticles: (query: string) => dispatch(findArticle(query)),
});

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
