import React, { SyntheticEvent } from 'react';
import { Article, MediaItem } from '../../store/models';
import { FaRegStar, FaStar } from 'react-icons/fa';
import './NewsItem.scss';

interface NewsItemProps {
  item: Article;
  onFavouritesClicked: (item: Article, isFavourite: boolean) => void;
  isFavourite: boolean;
}

function NewsItem(props: NewsItemProps): JSX.Element {
  const renderCotent = (item: Article, max: number): JSX.Element => {
    const regex = new RegExp(`(\\S+\\s+){${max}}`);
    const text = item.abstract;
    const m: string[] | null = text.match(regex);
    if (m !== null) {
      return (
        <p className="card-text">
          {m[0]}
          <a
            href={item.web_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info stretched-link"
          >
            . . .more
          </a>
        </p>
      );
    } else {
      return (
        <p className="card-text">
          <a
            href={item.web_url}
            target="_blank"
            rel="noopener noreferrer"
            className="stretched-link text-decoration-none text-reset"
          >
            {text}
          </a>
        </p>
      );
    }
  };

  const getImage = (item: Article): JSX.Element | undefined => {
    if (item.multimedia.length > 0) {
      const tumbnail: MediaItem[] = item.multimedia.filter((el: MediaItem): boolean =>
        el.subtype.includes('smallSquare252')
      );
      let imgSrc = '//placehold.it/150';
      if (tumbnail.length > 0) {
        imgSrc = `https://www.nytimes.com/${tumbnail[0].url}`;
      } else {
        imgSrc = `https://www.nytimes.com/${item.multimedia[0].url}`;
      }
      return (
        <div className="col-md-4">
          <a href={props.item.web_url} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} className="img-fluid d-block h-100 w-100" alt="article media" />
          </a>
        </div>
      );
    } else {
      return undefined;
    }
  };

  const renderItem = (): JSX.Element => {
    return (
      <div className="card mb-3 news-card">
        <div className="row no-gutters">
          {getImage(props.item)}
          <div className={props.item.multimedia.length ? 'col-md-8' : 'col'}>
            <div className="card-body">
              <div className="d-flex">
                <h5 className="card-title flex-grow-1">{props.item.headline.main}</h5>
                {props.isFavourite ? (
                  <FaStar
                    className="favourit-icon ml-3 mr-0 my-0 text-lovo"
                    onClick={(_: SyntheticEvent): void | undefined =>
                      handleFavoritClick(props.item, true)
                    }
                  />
                ) : (
                  <FaRegStar
                    className="favourit-icon ml-3 mr-0 my-0 text-lovo"
                    onClick={(_: SyntheticEvent): void | undefined =>
                      handleFavoritClick(props.item, false)
                    }
                  />
                )}
              </div>
              {renderCotent(props.item, 30)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleFavoritClick = (item: Article, isFavourite: boolean): void => {
    props.onFavouritesClicked(item, isFavourite);
  };

  return <div className="container-sm justify-content-center">{renderItem()}</div>;
}

export default NewsItem;
