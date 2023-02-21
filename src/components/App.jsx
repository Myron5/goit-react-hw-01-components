import { user, data, friends, transactions } from '../data';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { Container, Section, AppBox } from './GeneralContainers';

export const App = () => {
  return (
    <AppBox>
      <Section>
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <Statistics title="Upload stats" stats={data.default}></Statistics>
        </Container>
      </Section>
      <Section>
        <Container>
          <FriendList friends={friends.default}></FriendList>
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory items={transactions.default}></TransactionHistory>
        </Container>
      </Section>
    </AppBox>
  );
};
