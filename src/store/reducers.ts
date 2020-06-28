import { ArticleActionType, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_FAILED, LOAD_ARTICLES_IN_PROGRESS, FIND_ARTICLES_SUCCESS, FETCHING_STATUS, FIND_ARTICLES_IN_PROGRESS } from "./types";
import { Article } from "./models";

export const fetchingStatus = (state = FETCHING_STATUS.FETCHING_DONE, action: ArticleActionType): FETCHING_STATUS => {
    switch (action.type) {
        case LOAD_ARTICLES_IN_PROGRESS:
            return FETCHING_STATUS.LOADING_IN_PROGRESS;
        case FIND_ARTICLES_IN_PROGRESS:  
        return FETCHING_STATUS.FINDING_IN_PROGRESS;
        case FIND_ARTICLES_SUCCESS:  
        case LOAD_ARTICLES_SUCCESS:
        case LOAD_ARTICLES_FAILED:
            return FETCHING_STATUS.FETCHING_DONE;
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
            return state.concat(action.payload.articles);
        case FIND_ARTICLES_SUCCESS:
            
            return action.payload.articles;
        case LOAD_ARTICLES_IN_PROGRESS:
        case LOAD_ARTICLES_FAILED:
        default:
            return state;
    }
}

export const page = (
    state: number = 0,
    action: ArticleActionType
): number => {
    switch (action.type) {
        case FIND_ARTICLES_SUCCESS:
            return 1;
        case LOAD_ARTICLES_SUCCESS:
            return ++action.payload.page;
        case LOAD_ARTICLES_IN_PROGRESS:
        case LOAD_ARTICLES_FAILED:
        default:
            return state;
    }
}

export const query = (
    state: string = '',
    action: ArticleActionType
): string => {
    switch (action.type) {
        case FIND_ARTICLES_SUCCESS:
        case LOAD_ARTICLES_SUCCESS:
            return action.payload.query;
        case LOAD_ARTICLES_IN_PROGRESS:
        case LOAD_ARTICLES_FAILED:
        default:
            return state;
    }
}