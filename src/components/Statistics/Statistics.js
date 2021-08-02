import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ label, percentage }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
