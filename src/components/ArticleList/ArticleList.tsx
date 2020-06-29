import React, { FC, SyntheticEvent } from 'react';
import { Article } from '../../store/models';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { AiOutlineReload } from 'react-icons/ai';
import { loadMoreArticle } from '../../thunks';
import { FETCHING_STATUS, Favourites } from '../../store/types';
import Spinner from 'react-bootstrap/Spinner';
import { addToFavourites, removeFavourite } from '../../store/actions';

interface IArticleListProps {
  articles: Article[];
  favouriteArticles: Favourites;
  fetchingStatus: FETCHING_STATUS;
  loadMoreArticle: (query: string, page: number) => void;
  removeFavourite: (id: string) => void;
  addToFavourite: (article: Article) => void;
  page: number;
  query: string;
}

const ArticleList: FC<IArticleListProps> = (props: IArticleListProps): JSX.Element => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    props.loadMoreArticle(props.query, props.page);
  };

  const handleFavouriteClick = (article: Article, isFavourite: boolean) => {
    isFavourite ? props.removeFavourite(article._id) : props.addToFavourite(article);
  };

  const renderItems = (): JSX.Element[] => {
    const arr: JSX.Element[] = [];
    const map = props.favouriteArticles.map;
    // eslint-disable-next-line array-callback-return
    props.articles.map((news): void => {
      arr.push(
        <NewsItem
          key={news._id}
          item={news}
          isFavourite={map[news._id]}
          onFavouritesClicked={handleFavouriteClick}
        />
      );
    });
    return arr;
  };

  const renderButton = (): JSX.Element | undefined => {
    switch (props.fetchingStatus) {
      case FETCHING_STATUS.LOADING_IN_PROGRESS:
        return (
          <div className="d-flex justify-content-center my-3 text-lovo">
            <Spinner className="m-3" animation="border" />
          </div>
        );
      case FETCHING_STATUS.FETCHING_DONE:
        if (props.articles.length > 0) {
          return (
            <div className="d-flex justify-content-center my-3">
              <button
                type="button"
                className="btn btn-outline-lovo mx-auto my-3"
                onClick={(event: SyntheticEvent) => handleClick(event)}
              >
                <AiOutlineReload /> 기사 더 불러오기
              </button>
            </div>
          );
        }
        return undefined;
      default:
        return undefined;
    }
  };

  const loadingMessage = (
    <div className="list-wrapper">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center my-3 text-lovo">
          <Spinner className="m-3 text-lovo" animation="border" />
          <br />
          <strong>기사를 불러오는 중입니다</strong>
        </div>
      </div>
    </div>
  );
  const content = (
    <div className="list-wrapper">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {renderItems()}
          {renderButton()}
        </div>
      </div>
    </div>
  );

  switch (props.fetchingStatus) {
    case FETCHING_STATUS.FINDING_IN_PROGRESS:
      return loadingMessage;
    case FETCHING_STATUS.LOADING_IN_PROGRESS:
    default:
      return content;
  }
};

// export default ArticleList;
const mapStateToProps = (state: AppState) => ({
  articles: state.articles,
  page: state.page,
  query: state.query,
  fetchingStatus: state.fetchingStatus,
  favouriteArticles: state.favourites,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadMoreArticle: (query: string, page: number) => dispatch(loadMoreArticle(query, page)),
  addToFavourite: (article: Article) => dispatch(addToFavourites(article)),
  removeFavourite: (id: string) => dispatch(removeFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
