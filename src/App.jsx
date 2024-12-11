import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

import userData from "./userData.json";
import friendsData from "./friendsData.json";
import transactions from "./transactions.json";

import "modern-normalize";
import "./index.css";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <br />
      <br />
      <br />
      <FriendList friends={friendsData} />
      <br />
      <br />
      <br />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
