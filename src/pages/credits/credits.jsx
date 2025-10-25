const CreditsPage = ({ balance }) => {
  return (
    <div className="dashboard-page-content-container">
      <main className="dashboard-page-content">
        <h1 className="page-title">Credits</h1>

        {/* Add more content here */}
        <p>
          <strong>Current Balance:</strong> ${balance.toLocaleString("en-US")}
        </p>
      </main>
    </div>
  );
};

export default CreditsPage;
