const DebitsPage = ({ balance, addDebit }) => {
  return (
    <div className="dashboard-page-content-container">
      <main className="dashboard-page-content">
        <h1 className="page-title">Debits</h1>

        <p>
          <strong>Current Balance:</strong> ${balance.toLocaleString("en-US")}
        </p>
      </main>
    </div>
  );
};

export default DebitsPage;
