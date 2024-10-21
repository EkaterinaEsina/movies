import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';

export const Layout = ({ title = 'Portfolio', children }) => {
  return (
    <div className="App">
      <Header title={title} />

      <Main>
        {children}
      </Main>

      <Footer />
    </div>
  );
}