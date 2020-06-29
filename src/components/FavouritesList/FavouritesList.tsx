import React, { FC } from 'react';
import { Favourites } from "../../store/types";
import { connect } from 'react-redux';
import { removeFavourite } from '../../store/actions';
import { AppState } from '../../store/store';

interface IFavouritesProps {
    favouriteArticles: Favourites,
    removeFavourite: Function
}

const FavouritesList: FC<IFavouritesProps> = (props: IFavouritesProps) => {
    return (<p>Favourites!!</p>);
}

const mapStateToProps = (state: AppState) => ({
    favouriteArticles: state.favourites
});

const mapDispatchToProps = (dispatch: any) => ({
    removeFavourite: (id: string) => dispatch(removeFavourite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesList);
