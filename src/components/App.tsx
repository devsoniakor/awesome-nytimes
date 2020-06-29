import React, { FC } from 'react';
import './App.scss';
import SearchBar from './SearchBar/SearchBar';
import ArticleList from './ArticleList/ArticleList';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../store/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { findArticle } from '../thunks';
import FavouritesList from './FavouritesList/FavouritesList';
import { FAVOURITES_ROUTE, HOME_ROUTE } from '../routes';

const mapStateToProps = (state: AppState): any => ({
  articles: state.articles,
  page: state.page,
  query: state.query,
});

const mapDispatchToProps = (dispatch: any): any => ({
  loadArticles: (query: string) => dispatch(findArticle(query)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux & {
  loadArticles: (query: string) => void;
};

const App: FC<AppProps> = (props: AppProps): JSX.Element => {
  return (
    <div className="container">
      <h1 className="text-center my-4">Awesome NY Times</h1>
      <Router>
        <SearchBar searchArticle={props.loadArticles} />
        <Switch>
          <Route path={FAVOURITES_ROUTE} component={FavouritesList} />
          <Route path={HOME_ROUTE} component={ArticleList} />
        </Switch>
      </Router>
    </div>
  );
};

export default connector(App);
