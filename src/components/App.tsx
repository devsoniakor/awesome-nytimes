import React, { FC } from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import { Router } from "@reach/router"
import ArticleList from './ArticleList/ArticleList';
import { connect } from 'react-redux';
import { loadArticle } from '../thunks';
import { AppState } from '../store/store';

interface AppProps {
  loadArticles: typeof loadArticle;
}

const App: FC<AppProps> = ( { loadArticles } ) => {

  return (
    <div className="container">
      <SearchBar searchArticle={loadArticles}></SearchBar>
      <Router>
        <ArticleList path="/" />
      </Router>
    </div>
  );
}


const mapStateToProps = (store: AppState) => ({
  articles: store.articles,
});
const mapDispatchToProps = (dispatch: any) => ({
  loadArticles: (text: string) => dispatch(loadArticle(text)),
});

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
