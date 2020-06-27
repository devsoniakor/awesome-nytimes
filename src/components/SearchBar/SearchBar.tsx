import React, { SyntheticEvent } from 'react';
import { FaSearch, FaStar } from "react-icons/fa";

interface SearchBarProps {
    searchArticle: Function
}

function SearchBar(props: SearchBarProps) {

    let handleSubmit = (event: any) => {
        event.preventDefault();
        props.searchArticle(event.target.query.value);            
    }

    let handleBookmarkClick = (event: React.MouseEvent) => {
        event.preventDefault();
        // TODO: implement 
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
