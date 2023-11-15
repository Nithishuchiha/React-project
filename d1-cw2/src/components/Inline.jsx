const Inline = () => {
  const header = {
    color: "green",
  };

  return (
    <div>
      <h1 style={header}>Inline Style in JSX Example.</h1>
      <div style={{ backgroundColor: "darkblue", padding: 10, border: 5 }}>
        <p style={{ color: "blue", fontSize: 16 }}>
          This is a paragraph with inline styles applied
        </p>
      </div>
    </div>
  );
};

export default Inline;
