import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.rowItem}>{type}</td>
      <td className={s.rowItem}>{amount}</td>
      <td className={s.rowItem}>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
