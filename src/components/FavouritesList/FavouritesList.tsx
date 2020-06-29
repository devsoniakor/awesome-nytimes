import React, { FC } from 'react';
import { Favourites } from "../../store/types";
import { connect } from 'react-redux';
import { removeFavourite } from '../../store/actions';
import { AppState } from '../../store/store';
import NewsItem from '../NewsItem/NewsItem';
import { Article } from '../../store/models';
import { IoIosWarning } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface IFavouritesProps {
    favouriteArticles: Favourites,
    removeFavourite: Function,
    articles: Article[]
}

const FavouritesList: FC<IFavouritesProps> = (props: IFavouritesProps) => {

    let history = useHistory();

    let removeFavourite = (article: Article): void => {
        props.removeFavourite(article._id);
    }

    let renderItems = (): JSX.Element[] => {
        let arr: JSX.Element[] = [];
        let map = props.favouriteArticles.map;
        props.favouriteArticles.articles.map(news => {
            arr.push(<NewsItem key={news._id} item={news} isFavourite={map[news._id]} onFavouritesClicked={removeFavourite} />)
        })
        return arr;
    }

    let renderGoBackButton = () => {
        if (props.articles.length > 0) {
            return (
                <button type="button" className="btn btn-outline-lovo mt-4" onClick={(_: React.MouseEvent) => { history.goBack() }}><FaArrowLeft/> 검색결과로 돌아가기</button>
            );
        } 
        return (<p>검색창에 키워드를 넣고 기사를 검색 해 주세요</p>);
    }

    const noContent = (
        <div className="row justify-content-center">
            <div className="col-md-8 text-center py-5 text-lovo">
                <h1 className="pb-3 display-2"><IoIosWarning /></h1>
                <h4 className="pt-3"> 즐겨찾기 된 기사가 없습니다</h4>
                <div className="mt-4 p-2">
                    {renderGoBackButton()}
                </div>
            </div>
        </div>
    );
    const content = (
        <div className="list-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="text-right align-top pt-2 pb-4">
                        {renderGoBackButton()}
                    </div>
                    {renderItems()}
                </div>
            </div>
        </div>
    );
    return (props.favouriteArticles.articles.length > 0 ? content : noContent);
}

const mapStateToProps = (state: AppState) => ({
    favouriteArticles: state.favourites,
    articles: state.articles
});

const mapDispatchToProps = (dispatch: any) => ({
    removeFavourite: (id: string) => dispatch(removeFavourite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);
