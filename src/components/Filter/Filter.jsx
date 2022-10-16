import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChangeFilter, theme }) => {

  return (
    <FilterLabel>
      Search contacts:
      <FilterInput
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact..."
        theme={theme}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};