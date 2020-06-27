import React from 'react';
import { Article } from '../../api/models';
import NewsItem from '../NewsItem/NewsItem';
import { RouteComponentProps } from '@reach/router';

interface ArticleListProps extends RouteComponentProps{
    items: Article[]
}

function ArticleList(props: ArticleListProps)  {
    let renderItems = (): JSX.Element[] => {
        let arr: JSX.Element[] = [];
        let key = [1,2,3,4,5,6,7];
        let i = -1;
        props.items.map(news => {
            arr.push(<NewsItem key={key[++i]} item={news} />)
            // arr.push(<NewsItem key={news._id} item={news} />)
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

export default ArticleList;
