import React, { FC } from 'react';
import { Favourites } from '../../store/types';
import { connect } from 'react-redux';
import { removeFavourite } from '../../store/actions';
import { AppState } from '../../store/store';
import NewsItem from '../NewsItem/NewsItem';
import { Article } from '../../store/models';
import { IoIosWarning } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface IFavouritesProps {
  favouriteArticles: Favourites;
  removeFavourite: (id: string) => void;
  articles: Article[];
}

const FavouritesList: FC<IFavouritesProps> = (props: IFavouritesProps): JSX.Element => {
  const history = useHistory();

  const remove = (article: Article): void => {
    props.removeFavourite(article._id);
  };

  const handleButtonClick = (_: React.MouseEvent): void => {
    history.goBack();
  };

  const renderItems = (): JSX.Element[] => {
    const arr: JSX.Element[] = [];
    const map = props.favouriteArticles.map;
    // eslint-disable-next-line array-callback-return
    props.favouriteArticles.articles.map((news: Article): void => {
      arr.push(
        <NewsItem
          key={news._id}
          item={news}
          isFavourite={map[news._id]}
          onFavouritesClicked={remove}
        />
      );
    });
    return arr;
  };

  const renderGoBackButton = (): JSX.Element => {
    if (props.articles.length > 0) {
      return (
        <button type="button" className="btn btn-outline-lovo mt-4" onClick={handleButtonClick}>
          <FaArrowLeft /> 검색결과로 돌아가기
        </button>
      );
    }
    return <p>검색창에 키워드를 넣고 기사를 검색 해 주세요</p>;
  };

  const noContent = (
    <div className="row justify-content-center">
      <div className="col-md-8 text-center py-5 text-lovo">
        <h1 className="pb-3 display-2">
          <IoIosWarning />
        </h1>
        <h4 className="pt-3"> 즐겨찾기 된 기사가 없습니다</h4>
        <div className="mt-4 p-2">{renderGoBackButton()}</div>
      </div>
    </div>
  );
  const content = (
    <div className="list-wrapper">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-right align-top pt-2 pb-4">{renderGoBackButton()}</div>
          {renderItems()}
        </div>
      </div>
    </div>
  );
  return props.favouriteArticles.articles.length > 0 ? content : noContent;
};

const mapStateToProps = (state: AppState): any => ({
  favouriteArticles: state.favourites,
  articles: state.articles,
});

const mapDispatchToProps = (dispatch: any): any => ({
  removeFavourite: (id: string): void => dispatch(removeFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);
