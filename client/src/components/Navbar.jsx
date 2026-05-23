function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div
      style={{
        height: "70px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #ddd",
      }}
    >

      <h2>Dashboard</h2>

      <div>
        Welcome {user?.name}
      </div>

    </div>
  );
}

export default Navbar;