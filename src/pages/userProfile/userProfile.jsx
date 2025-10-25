const UserProfilePage = ({ balance }) => {
  return (
    <div className="dashboard-page-content-container">
      <main className="dashboard-page-content">
        <h1 className="page-title" style={{ marginBottom: "2rem" }}>
          User Profile
        </h1>

        <div>
          <p>
            <strong>Name:</strong> Joe Smith
          </p>
          <p>
            <strong>Member Since:</strong> 11/22/99
          </p>
          <p>
            <strong>Current Balance:</strong> ${balance.toLocaleString("en-US")}
          </p>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;
