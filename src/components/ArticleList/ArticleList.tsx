import React, { FC } from 'react';
import { Article } from '../../store/models';
import NewsItem from '../NewsItem/NewsItem';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import { AppState } from '../../store/store';

interface ArticleListProps extends RouteComponentProps {
    articles: Article[],
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {

    let renderItems = (): JSX.Element[] => {
        let arr: JSX.Element[] = [];
        articles.map(news => {
            arr.push(<NewsItem key={news._id} item={news} />)
        })
        return arr;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                {renderItems()}
            </div>
        </div>
    );
}

// export default ArticleList;
const mapStateToProps = (state: AppState) => {
    return { articles: state.articles };
};

const mapDispatchToProps = dispatch => ({
    // startLoadingTodos: () => dispatch(loadTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
// export default ArticleList;

