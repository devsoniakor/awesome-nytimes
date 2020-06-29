import React, { SyntheticEvent } from 'react';
import { FaSearch, FaStar } from "react-icons/fa";
import { createBrowserHistory } from "history";
import { Link, Router, useHistory } from 'react-router-dom';
import { FAVOURITES_ROUTE, HOME_ROUTE } from '../../routes';

interface SearchBarProps {
    searchArticle: Function,
}

function SearchBar(props: SearchBarProps) {

    let history = useHistory();

    let handleSubmit = (event: any) => {
        event.preventDefault();
        if (history.location.pathname !== HOME_ROUTE) {
            history.push(HOME_ROUTE)
        }
        props.searchArticle(event.target.query.value);
    }

    let handleBookmarkClick = (event: React.MouseEvent) => {
        event.preventDefault();
        if (history.location.pathname !== FAVOURITES_ROUTE) {
            history.push(FAVOURITES_ROUTE);
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h1 className="font-weight-light text-center">Awesome NY Times</h1>
                <div className="card bg-light mb-4">
                    <div className="card-body text-center">
                        <form
                            onSubmit={(event: SyntheticEvent) => handleSubmit(event)}>
                            <div className="input-group input-group-lg">
                                <input
                                    type="text"
                                    placeholder="Search Articles"
                                    className="form-control"
                                    name="query"
                                />
                                <div className="input-group-append">
                                    <button type="submit"
                                        className="btn btn-sm btn-outline-info"
                                        title="검색"
                                    >
                                        <FaSearch />
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline-info"
                                        title="즐겨찾기"
                                        onClick={(e: React.MouseEvent) => handleBookmarkClick(e)}
                                    >
                                        <FaStar />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
