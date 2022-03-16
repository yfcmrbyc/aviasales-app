import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSorting, VisibilitySorting } from '../../actions/actions';
import style from './tariff-filter.module.scss';

function TariffFilter({ currentSorting, clickSorting }) {
  const ceapestBtn = currentSorting === VisibilitySorting.SHOW_CHEAPEST ? style['active-cheapest'] : style.cheapest;
  const fastestBtn = currentSorting === VisibilitySorting.SHOW_FASTEST ? style['active-btn'] : style.btn;
  const optimaltBtn = currentSorting === VisibilitySorting.SHOW_OPTIMAL ? style['active-optimal'] : style.optimal;
  return (
    <ul className={style['tariff-filter']}>
      <li>
        <button onClick={() => clickSorting(VisibilitySorting.SHOW_CHEAPEST)} type="button" className={ceapestBtn}>
          Самый дешевый
        </button>
      </li>
      <li>
        <button onClick={() => clickSorting(VisibilitySorting.SHOW_FASTEST)} type="button" className={fastestBtn}>
          Самый быстрый
        </button>
      </li>
      <li>
        <button onClick={() => clickSorting(VisibilitySorting.SHOW_OPTIMAL)} type="button" className={optimaltBtn}>
          Оптимальный
        </button>
      </li>
    </ul>
  );
}

TariffFilter.propTypes = {
  currentSorting: PropTypes.string.isRequired,
  clickSorting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSorting: state.sorting.visibilitySorting,
});

const mapDispatchToProps = (dispatch) => ({
  clickSorting: (sorting) => dispatch(setSorting(sorting)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TariffFilter);
