const Header = () => {
  return (
    <div className="h-[15%] flex flex-col items-center justify-center bg-blue-500 text-white">
      <h1 className="text-3xl font-bold">
        Thank you for checking out my Challenge Page!
      </h1>
      <h2 className="text-xl font-medium">
        If you would like to check out more about me, please visit my portfolio
        website at{" "}
        <a
          className="underline"
          href="https://mcstich.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mcstich.com
        </a>
        !
      </h2>
      <h3 className="text-lg font-medium">
        To get started, just click the "Who will pay for coffee today" button.
      </h3>
    </div>
  );
};

export default Header;
