import React from 'react';
import { Article, MediaItem } from '../../api/models';

interface NewsItemProps {
    item: Article;
}

function NewsItem(props: NewsItemProps) {

    let renderTruncatedText = (text: string, max: number): JSX.Element => {
        const regex = new RegExp('(\\S+\\s?)' + `{${max}}`);
        let m: string[] | null;
        
        if ((m = text.match(regex)) !== null) {
            return (<p className="card-text">{m[0]}
            <a href="#" className="text-info">. . .more</a>
            </p>);
        } else {
            return (<p className="card-text">{text}</p>);
        }
    }

    let getImageSource = (item: Article):string => {
        if (item.multimedia.length > 0) {
            let tumbnail: MediaItem[] = item.multimedia.filter(el => el.subtype.includes('smallSquare252'));
            if (tumbnail.length > 0) {
                return `https://www.nytimes.com/${tumbnail[0].url}`;
            } else {
                return `https://www.nytimes.com/${item.multimedia[0].url}`;
            }
        }
        return "//placehold.it/150";
    }

    let renderItem = () => {
        return (
            <div className="card flex-row mb-3">
                <div className="row no-gutters">
                    <div className="card-img-top col-md-3 ">
                        <img src={getImageSource(props.item)} className="img-fluid d-block h-100 w-100" alt="" />
                    </div>
                    <div className="col p-2">
                        <div className="card-block px-2">
                            <h4 className="card-title">{props.item.headline.print_headline}</h4>
                            {renderTruncatedText(props.item.lead_paragraph, 30)}
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
