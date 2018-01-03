import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { searchHotelBy } from '../domain/searchHotelBy';
import { setPlace , startSearch} from '../actions/';

const SearchForm = props => (
  <form className="search-form"
    onSubmit={(e) => {
       e.preventDefault();
       props.startSearch();
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={(e)=> {
        e.preventDefault();
        props.setPlace(e.target.value)
      }}
    />
    <input className="submit-button" type="submit" value="検索" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  place: state.place,
});


export default connect(mapStateToProps,{setPlace,startSearch})(SearchForm);
