import React, { FC, SyntheticEvent } from 'react';
import { Article } from '../../store/models';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { AiOutlineReload } from 'react-icons/ai';
import { loadMoreArticle } from '../../thunks';
import { FETCHING_STATUS } from '../../store/types';
import Spinner from 'react-bootstrap/Spinner';

interface IArticleListProps {
    articles: Article[],
    fetchingStatus: FETCHING_STATUS,
    loadMoreArticle: Function,
    page: number,
    query: string
}

const ArticleList: FC<IArticleListProps> = (props: IArticleListProps) => {

    let handleClick = (event: any) => {
        event.preventDefault();

        props.loadMoreArticle(props.query, props.page);
    }

    let renderItems = (): JSX.Element[] => {
        let arr: JSX.Element[] = [];
        props.articles.map(news => {
            arr.push(<NewsItem key={news._id} item={news} />)
        })
        return arr;
    }

    let renderButton = (): JSX.Element => {
        switch (props.fetchingStatus) {
            case FETCHING_STATUS.LOADING_IN_PROGRESS:
                return (
                    <div className="d-flex justify-content-center my-3">
                        <Spinner className="m-3" animation="border" variant="primary" />
                    </div>
                );
            case FETCHING_STATUS.FETCHING_DONE:
                if (props.articles.length > 0) {
                    return (
                        <div className="d-flex justify-content-center my-3">
                            <button type="button" className="btn btn-outline-primary mx-auto my-3" onClick={(event: SyntheticEvent) => handleClick(event)}><AiOutlineReload /> Load More</button>
                        </div>
                    );
                }
                return;
            default:
                return;
        }
    }

    const loadingMessage = <div>Loading Articles...</div>;
    const content = (
        <div className="list-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {renderItems()}
                    {renderButton()}
                </div>
            </div>
        </div>
    );

    switch (props.fetchingStatus) {
        case FETCHING_STATUS.FINDING_IN_PROGRESS:
            return loadingMessage;
        case FETCHING_STATUS.LOADING_IN_PROGRESS:
        default:
            return content;
    }
}

// export default ArticleList;
const mapStateToProps = (state: AppState) => ({
    articles: state.articles,
    page: state.page,
    query: state.query,
    fetchingStatus: state.fetchingStatus
});

const mapDispatchToProps = (dispatch: any) => ({
    loadMoreArticle: (query: string, page: number) => dispatch(loadMoreArticle(query, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default ArticleList;

