import React, { FC, SyntheticEvent } from 'react';
import { Article } from '../../store/models';
import NewsItem from '../NewsItem/NewsItem';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { AiOutlineReload } from 'react-icons/ai';
import { loadMoreArticle } from '../../thunks';

interface IArticleListProps  {
    articles: Article[],
    isLoading: boolean,
    loadMoreArticle: Function,
    page: number,
    query: string
}

const ArticleList: FC<IArticleListProps> = (props : IArticleListProps) => {

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

    const loadingMessage = <div>Loading Articles...</div>;
    const content = (
        <div className="list-wrapper">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {renderItems()}
                    {props.articles.length > 0 ? (<div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary mx-auto my-3" onClick={(event: SyntheticEvent) => handleClick(event)}><AiOutlineReload /> Load More</button>
                    </div>) : undefined}
                </div>
            </div>
        </div>
    );

    return props.isLoading ? loadingMessage : content;

}

// export default ArticleList;
const mapStateToProps = (state: AppState) => ({
    articles: state.articles,
    page: state.page,
    query: state.query,
    isLoading: state.isLoading
    // return { isLoading: state.isLoading, articles: state.articles };
});

const mapDispatchToProps = (dispatch: any) => ({
    loadMoreArticle: (query: string, page: number) => dispatch(loadMoreArticle(query, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default ArticleList;

