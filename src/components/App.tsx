import React, { FC } from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import ArticleList from './ArticleList/ArticleList';
import { connect } from 'react-redux';
import { AppState } from '../store/store';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { findArticle } from '../thunks';
import FavouritesList from './FavouritesList/FavouritesList';
import { FAVOURITES_ROUTE, HOME_ROUTE } from '../routes';

interface AppProps {
  loadArticles: Function;
}

const App: FC<AppProps> = (props: AppProps) => {

  return (
    <div className="container">
      <h1 className="text-center my-4">Awesome NY Times</h1>
      <Router>
        <SearchBar searchArticle={props.loadArticles}></SearchBar>
        <Switch>
          <Route path={FAVOURITES_ROUTE} component={FavouritesList} />
          <Route path={HOME_ROUTE} component={ArticleList} />
        </Switch>
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
