import React from 'react';
import { FaSearch, FaStar } from "react-icons/fa";

function SearchBar() {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h1 className="font-weight-light text-center">Awesome NY Times</h1>
                <div className="card bg-light mb-4">
                    <div className="card-body text-center">
                        <div className="input-group input-group-lg">
                            <input
                                type="text"
                                placeholder="Search Articles"
                                className="form-control"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-sm btn-outline-info"
                                    title="검색"
                                >
                                    <FaSearch/>
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-info"
                                    title="즐겨찾기"
                                >
                                    <FaStar/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
