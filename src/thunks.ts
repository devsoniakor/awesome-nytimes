import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "./store/store";
import { loadArticlesInProgress, loadArticlesSuccess, loadArticlesFailed } from "./store/actions";
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { ArticleSearchResponse, Article } from "./store/models";

const API = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';


export const loadArticle = (
    query: string, page: number = 0
): ThunkAction<void, AppState, null, Action<any>> => async dispatch => {
    console.log('thunk!!')
    try {
        dispatch(loadArticlesInProgress());
        const config = getAxiosConfig(query, page);
        const articles = await axios.get(API, config)
            .then((response: AxiosResponse<ArticleSearchResponse>) => {
                let arr: Article[] = response.data.response.docs;
                return arr;
            });
        dispatch(loadArticlesSuccess(articles));

    } catch (err) {
        console.log(err);
        dispatch(loadArticlesFailed());
    }
}

const getAxiosConfig = (query: string, page = 0): AxiosRequestConfig => {
    return {
        params: {
            'q': query,
            'api-key': '',
            'page': page,
            'fq': 'source:("The New York Times")',
            'sort': 'relevance',
        }
    };
}