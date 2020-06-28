import React, { SyntheticEvent } from 'react';
import { Article, MediaItem } from '../../store/models';
import { FaRegStar } from "react-icons/fa";
import './NewsItem.scss';

interface NewsItemProps {
    item: Article;
}

function NewsItem(props: NewsItemProps) {

    let renderCotent = (item: Article, max: number): JSX.Element => {
        const regex = new RegExp(`(\\S+\\s+){${max}}`);
        let m: string[] | null;
        const text = item.abstract;
        if ((m = text.match(regex)) !== null) {
            return (<p className="card-text">{m[0]}
                <a href={item.web_url} target="_blank" rel="noopener noreferrer" className="text-info stretched-link">. . .more</a>
            </p>);
        } else {
            return (<p className="card-text"><a href={item.web_url} target="_blank" rel="noopener noreferrer" className="stretched-link text-decoration-none text-reset">{text}</a></p>);
        }
    }

    let getImage = (item: Article): JSX.Element | undefined => {
        if (item.multimedia.length > 0) {
            let tumbnail: MediaItem[] = item.multimedia.filter(el => el.subtype.includes('smallSquare252'));
            let imgSrc = '//placehold.it/150';
            if (tumbnail.length > 0) {
                imgSrc = `https://www.nytimes.com/${tumbnail[0].url}`;
            } else {
                imgSrc = `https://www.nytimes.com/${item.multimedia[0].url}`;
            }
            return (
                <div className="col-md-4">
                    <a href={props.item.web_url} target="_blank" rel="noopener noreferrer">
                        <img src={imgSrc} className="img-fluid d-block h-100 w-100" alt="image" />
                    </a>
                </div>
            );
        } else {
            return undefined;
        }
    }

    let renderItem = () => {
        return (
            <div className="card mb-3 table-hover">
                <div className="row no-gutters">
                    {getImage(props.item)}
                    <div className={props.item.multimedia.length ? "col-md-8" : "col"}>
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className="card-title flex-grow-1">{props.item.headline.main}</h5>
                                <FaRegStar className="favourit-icon ml-3 mr-0 my-0 text-info" onClick={(event: SyntheticEvent) => handleFavoritClick(event)} />
                            </div>
                            {renderCotent(props.item, 30)}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }

    let handleFavoritClick = (event: any) => {
        event.preventDefault();

        console.log('Icon clicked!!!')
    }

    return (
        <div className="container-sm justify-content-center">
            {renderItem()}
        </div>
    );
}

export default NewsItem;
