import { LOAD_ARTICLES_IN_PROGRESS, LOAD_ARTICLES_SUCCESS as LOAD_MORE_ARTICLES_SUCCESS, LOAD_ARTICLES_FAILED, FIND_ARTICLES_SUCCESS, FIND_ARTICLES_IN_PROGRESS } from "./types";
import { Article } from "./models";

export const loadArticlesInProgress = () => {
    return { type: LOAD_ARTICLES_IN_PROGRESS }
}

export const findArticlesInProgress = () => {
    return { type: FIND_ARTICLES_IN_PROGRESS }
}

export const findArticleSuccess = (articles: Article[], query: string, page: number) => {
    
    return {
        type: FIND_ARTICLES_SUCCESS,
        payload: { articles, query, page }
    };
}

export const loadMoreArticlesSuccess = (articles: Article[], query: string, page: number) => {
    return {
        type: LOAD_MORE_ARTICLES_SUCCESS,
        payload: { articles, query, page }
    };
}

export const loadArticlesFailed = () => {
    return { type: LOAD_ARTICLES_FAILED };
}
