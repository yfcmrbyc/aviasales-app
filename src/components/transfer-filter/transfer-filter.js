import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { chooseFilter } from '../../actions/actions';
import style from './transfer-filter.module.scss';

function TransferFilter({ all, filters, clickOnFilter }) {
  const { nonStop, one, two, three } = filters;

  const classForAll = all ? style['checkbox-checked'] : style.checkbox;
  const classForNonStop = nonStop ? style['checkbox-checked'] : style.checkbox;
  const classForOne = one ? style['checkbox-checked'] : style.checkbox;
  const classForTwo = two ? style['checkbox-checked'] : style.checkbox;
  const classForThree = three ? style['checkbox-checked'] : style.checkbox;

  return (
    <aside className={style['transfer-filter']}>
      <p className={style.title}>Количество пересадок</p>
      <ul>
        <li className={style.item}>
          <label className={style.label}>
            <input onClick={() => clickOnFilter('all')} className={style.input} type="checkbox" name="all" />
            <span className={classForAll} />
            Все
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input onClick={() => clickOnFilter('nonStop')} className={style.input} type="checkbox" name="nonStop" />
            <span className={classForNonStop} />
            Без пересадок
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input onClick={() => clickOnFilter('one')} className={style.input} type="checkbox" name="one" />
            <span className={classForOne} />1 пересадка
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input onClick={() => clickOnFilter('two')} className={style.input} type="checkbox" name="two" />
            <span className={classForTwo} />2 пересадки
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input onClick={() => clickOnFilter('three')} className={style.input} type="checkbox" name="three" />
            <span className={classForThree} />3 пересадки
          </label>
        </li>
      </ul>
    </aside>
  );
}

TransferFilter.propTypes = {
  all: PropTypes.bool.isRequired,
  filters: PropTypes.objectOf(PropTypes.bool).isRequired,

  clickOnFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  all: state.filteredTickets.filters.all,
  filters: state.filteredTickets.filters.otherFilters,
});

const mapDispatchToProps = (dispatch) => {
  const { chooseFilterDispatch } = bindActionCreators({ chooseFilterDispatch: chooseFilter }, dispatch);

  return {
    clickOnFilter: chooseFilterDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFilter);
