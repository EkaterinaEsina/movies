export const Main = (props) => {
  const { children } = props;

  return (
    <main className="container content">
      {children}
    </main>
  );
}