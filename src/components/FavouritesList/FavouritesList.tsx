import React, { FC } from 'react';
import { Favourites } from "../../store/types";
import { connect } from 'react-redux';
import { removeFavourite } from '../../store/actions';
import { AppState } from '../../store/store';
import NewsItem from '../NewsItem/NewsItem';
import { Article } from '../../store/models';

interface IFavouritesProps {
    favouriteArticles: Favourites,
    removeFavourite: Function
}

const FavouritesList: FC<IFavouritesProps> = (props: IFavouritesProps) => {

    let removeFavourite = (article: Article) => {
        props.removeFavourite(article._id);
    }
    let renderItems = (): JSX.Element[] => {
        let arr: JSX.Element[] = [];
        let map = props.favouriteArticles.map;
        props.favouriteArticles.articles.map(news => {
            arr.push(<NewsItem key={news._id} item={news} isFavourite={map[news._id]} onFavouritesClicked={removeFavourite}/>)
        })
        return arr;
    }

    const noContent = <div>No Favourites!! </div>;
    const content = (
        <div className="list-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {renderItems()}
                </div>
            </div>
        </div>
    );

    return (props.favouriteArticles.articles.length > 0 ? content : noContent);
    // return noContent;
}

const mapStateToProps = (state: AppState) => ({
    favouriteArticles: state.favourites
});

const mapDispatchToProps = (dispatch: any) => ({
    removeFavourite: (id: string) => dispatch(removeFavourite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);
