function Sidebar() {

  return (

    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "20px",
      }}
    >

      <h2>TaskFlow AI</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "30px",
        }}
      >

        <li
          style={{
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Dashboard
        </li>

        <li
          style={{
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Projects
        </li>

        <li
          style={{
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Tasks
        </li>

        <li
          style={{
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          Team
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;