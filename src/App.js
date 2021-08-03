import Container from './components/Container/Container';

import Profile from './components/Social-profile/Profile';
import user from './data/user.json';

import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/Friend-list/FriendList';
import friends from './data/friends.json';

import TransactionList from './components/Transaction-history/TransactionList';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Container>
        <Profile
          src={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Container>

      <Container>
        <StatisticsList stats={statisticalData} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionList items={transactions} />
      </Container>
    </div>
  );
}
