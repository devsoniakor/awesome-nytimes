import React, { FC } from 'react';
import { Article } from '../../store/models';
import NewsItem from '../NewsItem/NewsItem';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';
import { AiOutlineReload } from 'react-icons/ai';

interface ArticleListProps extends RouteComponentProps {
    articles: Article[],
    isLoading: boolean
}

const ArticleList: FC<ArticleListProps> = ({ articles, isLoading }) => {

    let renderItems = (): JSX.Element[] => {
        let arr: JSX.Element[] = [];
        articles.map(news => {
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
                    {articles.length > 0 ? (<div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary mx-auto my-3"><AiOutlineReload /> Load More</button>
                    </div>) : undefined}
                </div>
            </div>
        </div>
    );

    return isLoading ? loadingMessage : content;

}

// export default ArticleList;
const mapStateToProps = (state: AppState) => {
    return { isLoading: state.isLoading, articles: state.articles };
};

const mapDispatchToProps = (dispatch: any) => ({
    // startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default ArticleList;

