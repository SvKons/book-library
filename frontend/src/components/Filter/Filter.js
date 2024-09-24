import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, selecAuthorFilter, selecTitleFilter, selecOnlyFavoriteFilter, setAuthorFilter, setOnlyFavoriteFilter, setTitleFilter } from '../../redux/slices/filterSlice';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selecTitleFilter);
    const authorFilter = useSelector(selecAuthorFilter);
    const onlyFavoriteFilter = useSelector(selecOnlyFavoriteFilter);

    const handleTitleFilterChange = e => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleaAuthorFilterChange = e => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter());
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input type="text" value={titleFilter} placeholder="Filter by title..." onChange={handleTitleFilterChange} />
                </div>
                <div className="filter-group">
                    <input type="text" value={authorFilter} placeholder="Filter by author..." onChange={handleaAuthorFilterChange} />
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange} />
                        Only favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>
                    Reset Filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
