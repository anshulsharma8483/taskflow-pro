import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {

  // Store projects from backend
  const [projects, setProjects] = useState([]);

  // Run when page loads
  useEffect(() => {

    fetchProjects();

  }, []);

  // Fetch projects from backend
  const fetchProjects = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div
      style={{
        display: "flex",
      }}
    >

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f3f4f6",
          minHeight: "100vh",
        }}
      >

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div
          style={{
            padding: "30px",
          }}
        >

          <h1>
            Welcome to TaskFlow AI
          </h1>

          {/* Dashboard Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3, 1fr)",
              gap: "20px",
              marginTop: "30px",
            }}
          >

            {/* Card 1 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >

              <h3>Total Projects</h3>

              <p>
                {projects.length}
              </p>

            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >

              <h3>Total Tasks</h3>

              <p>45</p>

            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >

              <h3>Completed</h3>

              <p>20</p>

            </div>

          </div>

          {/* Projects Section */}
          <h2
            style={{
              marginTop: "40px",
            }}
          >
            Projects
          </h2>

          {/* Show Projects */}
          <div>

            {projects.map((project) => (

              <div
                key={project._id}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  marginTop: "20px",
                  borderRadius: "10px",
                }}
              >

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <p>
                  Status: {project.status}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;