import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import Statistics from './Statistics';

export default function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <ul className={s.statList}>
        {stats.map(stat => (
          <Statistics
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
