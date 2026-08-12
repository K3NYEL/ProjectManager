function Container({ children }) {
  return (
    <div
      id="center"
      className="flex flex-col h-screen items-center justify-center"
    >
      {children}
    </div>
  );
}

export default Container;
