import { ArticleActionType, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_FAILED, LOAD_ARTICLES_IN_PROGRESS } from "./types";
import { Article } from "./models";

export const isLoading = (state = false, action: ArticleActionType): boolean => {
    switch (action.type) {
    case LOAD_ARTICLES_IN_PROGRESS:
        return true;
    case LOAD_ARTICLES_SUCCESS:
    case LOAD_ARTICLES_FAILED:
        return false;
    default:
        return state;
    }
}

export const articles = (
    state: Article[] = [],
    action: ArticleActionType
): Article[] => {
    switch (action.type) {
        case LOAD_ARTICLES_SUCCESS:
            state  = state.concat(action.payload.articles)
            return state;
        case LOAD_ARTICLES_IN_PROGRESS:
        case LOAD_ARTICLES_FAILED:
        default:
            return state;
    }
}