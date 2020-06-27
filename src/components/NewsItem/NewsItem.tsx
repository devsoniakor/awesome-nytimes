import React from 'react';
import { Article } from './NewsItemModel';

interface NewsItemProps {
    item: Article;
}

function NewsItem(props: NewsItemProps) {
    let renderItem = () => {
        return (
            <div className="card flex-row mb-3">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src="//placehold.it/150" className="img-fluid" alt="" />
                    </div>
                    <div className="col p-2">
                        <div className="card-block px-2">
                            <h4 className="card-title">Title</h4>
                            <p className="card-text">Description</p>
                            <a href="#" className="btn btn-primary">BUTTON</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-sm justify-content-center">
            {renderItem()}
        </div>
    );
}

export default NewsItem;
