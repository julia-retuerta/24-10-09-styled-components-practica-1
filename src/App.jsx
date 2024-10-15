import PageContainer from './components/pageContainer/PageContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <PageContainer title='Social Media Dashboard' subtitle='Total Followers: 23,004' />
    </>
  );
};

export default App;
