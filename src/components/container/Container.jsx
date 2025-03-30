const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="mx-auto max-w-7xl px-4">
        {children}
      </div>
    </div>
  );
};

export default Container;
