import { Article } from "./models";

export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const LOAD_ARTICLES_IN_PROGRESS = 'LOAD_ARTICLES_IN_PROGRESS';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const FIND_ARTICLES_SUCCESS = 'FIND_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAILED = 'LOAD_ARTICLES_FAILED';

interface LoadArticleAction {
    type: typeof LOAD_ARTICLES
    payload: { articles: Article[] }
}

interface LoadArticleInProgressAction {
    type: typeof LOAD_ARTICLES_IN_PROGRESS
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

export type ArticleActionType = LoadArticleAction | LoadArticleInProgressAction | LoadArticlesSuccess | LoadArticlesFailed | FindArticleSuccess;
