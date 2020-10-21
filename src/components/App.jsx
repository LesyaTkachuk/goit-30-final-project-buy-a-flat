import React from 'react';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';

const App = () => {
  return (
    <Layout>
      <Appbar />
      <Content />
      {/* {error && <Notification />} */}
    </Layout>
  );
};

export default App;
