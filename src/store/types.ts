import { Article } from "./models";

export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const LOAD_ARTICLES_IN_PROGRESS = 'LOAD_ARTICLES_IN_PROGRESS';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const FIND_ARTICLES_SUCCESS = 'FIND_ARTICLES_SUCCESS';
export const FIND_ARTICLES_IN_PROGRESS = 'FIND_ARTICLES_IN_PROGRESS';
export const LOAD_ARTICLES_FAILED = 'LOAD_ARTICLES_FAILED';

interface LoadArticleAction {
    type: typeof LOAD_ARTICLES
    payload: { articles: Article[] }
}

interface LoadArticleInProgressAction {
    type: typeof LOAD_ARTICLES_IN_PROGRESS
}

interface FindArticleInProgressAction {
    type: typeof FIND_ARTICLES_IN_PROGRESS
}
interface FindArticleSuccess {
    type: typeof FIND_ARTICLES_SUCCESS
    payload: { articles: Article[], query: string, page: number }
}

interface LoadArticlesSuccess {
    type: typeof LOAD_ARTICLES_SUCCESS
    payload: { articles: Article[], query: string, page: number }
}

interface LoadArticlesFailed {
    type: typeof LOAD_ARTICLES_FAILED
    payload: { articles: Article[], query: string, page: number }
}

export enum FETCHING_STATUS  {
    LOADING_IN_PROGRESS,
    FINDING_IN_PROGRESS,
    FETCHING_DONE
}

export type ArticleActionType = LoadArticleAction | LoadArticleInProgressAction | LoadArticlesSuccess | LoadArticlesFailed | FindArticleSuccess | FindArticleInProgressAction;


export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

interface AddToFavourites {
    type: typeof ADD_TO_FAVOURITES
    payload: { article: Article }
}

interface RemoveFavourite {
    type: typeof REMOVE_FAVOURITE
    payload: { id: string }
}

export type Favourites = {
    articles: Article[],
    map: {[key: string]: boolean}
}

export type FavouritesActionType = AddToFavourites | RemoveFavourite;
