import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "./store/store";
import { loadArticlesInProgress, loadMoreArticlesSuccess, loadArticlesFailed, findArticleSuccess, findArticlesInProgress } from "./store/actions";
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ArticleSearchResponse, Article } from "./store/models";
import { KEY } from "./api_key";

// const API = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API = 'http://localhost:4000/articlesearch.json';


export const findArticle = (
    query: string = '', page: number = 0
): ThunkAction<void, AppState, null, Action<any>> => async dispatch => {
    try {
        dispatch(findArticlesInProgress());
        const config = getAxiosConfig(query, page);
        const articles = await axios.get(API, config)
            .then((response: AxiosResponse<ArticleSearchResponse>) => {
                let arr: Article[] = response.data.response.docs;
                return arr;
            });
            
        dispatch(findArticleSuccess(articles, query, page));

    } catch (err) {
        
        dispatch(loadArticlesFailed());
    }
}

export const loadMoreArticle = (
    query: string, page: number = 0
): ThunkAction<void, AppState, null, Action<any>> => async dispatch => {
    try {
        
        dispatch(loadArticlesInProgress());
        const config = getAxiosConfig(query, page);
        const articles = await axios.get(API, config)
            .then((response: AxiosResponse<ArticleSearchResponse>) => {
                let arr: Article[] = response.data.response.docs;
                return arr;
            });
        dispatch(loadMoreArticlesSuccess(articles, query, page));

    } catch (err) {
        
        dispatch(loadArticlesFailed());
    }
}


const getAxiosConfig = (query: string, page = 0): AxiosRequestConfig => {
    return {
        params: {
            'q': query,
            'api-key': KEY,
            'page': page,
            'fq': 'source:("The New York Times")',
            'sort': 'relevance',
        }
    };
}