import { LOAD_ARTICLES_IN_PROGRESS, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_FAILED } from "./types";
import { Article } from "./models";

export const loadArticlesInProgress = () => {
    return { type: LOAD_ARTICLES_IN_PROGRESS }
}

export const loadArticlesSuccess = (articles: Article[]) => {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        payload: { articles }
    };
}

export const loadArticlesFailed = () => {
    return { type: LOAD_ARTICLES_FAILED };
}
