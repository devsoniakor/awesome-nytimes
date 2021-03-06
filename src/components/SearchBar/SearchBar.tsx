import React, { SyntheticEvent } from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { FAVOURITES_ROUTE, HOME_ROUTE } from '../../routes';
import { AppState } from '../../store/store';
import { connect, ConnectedProps } from 'react-redux';
import './SearchBar.scss';

const mapStateToProps = (state: AppState) => ({
  query: state.query,
});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

type SearchBarProps = PropsFromRedux & {
  searchArticle: (query: string) => void;
};

function SearchBar(props: SearchBarProps): JSX.Element {
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (history.location.pathname !== HOME_ROUTE) {
      history.push(HOME_ROUTE);
    }
    if (event.target.query.value === '') {
      event.target.classList.add('was-validated');
    } else {
      props.searchArticle(event.target.query.value);
      event.target.classList.remove('was-validated');
    }
  };

  const handleBookmarkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (history.location.pathname !== FAVOURITES_ROUTE) {
      history.push(FAVOURITES_ROUTE);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card bg-searchbar mb-4">
          <div className="card-body text-center">
            <form
              className="needs-validation"
              onSubmit={(event: SyntheticEvent) => handleSubmit(event)}
            >
              <div className="form-row">
                <div className="input-group input-group-lg d-inline-flex">
                  <input
                    type="text"
                    placeholder="Search Articles"
                    className="form-control"
                    name="query"
                    defaultValue={props.query}
                    required={true}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-sm btn-outline-lovo"
                      title="검색"
                      formNoValidate={true}
                    >
                      <FaSearch />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-lovo"
                      title="즐겨찾기"
                      onClick={(e: React.MouseEvent) => handleBookmarkClick(e)}
                    >
                      <FaStar />
                    </button>
                  </div>
                  <div className="invalid-feedback">검색어를 입력해 주세요</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connector(SearchBar);
