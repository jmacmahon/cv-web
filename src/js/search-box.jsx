import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from './actions';

const SearchBoxInner = ({ handleChange }) => (
  <input type="text" onChange={handleChange} />
);

SearchBoxInner.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  handleChange: event => (
    dispatch({
      type: actions.UPDATE_SEARCHBOX_VALUE,
      value: event.target.value,
    })
  ),
});

const SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBoxInner);

export default SearchBox;
