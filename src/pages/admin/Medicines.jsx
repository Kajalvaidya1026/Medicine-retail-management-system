
import { useMemo, useState } from "react";
import "../../styles/medicinepage.css";

function Medicines() {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      stock: 120,
      price: 10,
      expiry: "2027-06-15",
    },
    {
      id: 2,
      name: "Amoxicillin 500mg",
      category: "Antibiotic",
      stock: 15,
      price: 50,
      expiry: "2027-08-20",
    },
    {
      id: 3,
      name: "Cetirizine 10mg",
      category: "Allergy",
      stock: 90,
      price: 20,
      expiry: "2027-09-10",
    },
    {
      id: 4,
      name: "Vitamin D3 1000IU",
      category: "Vitamins",
      stock: 40,
      price: 30,
      expiry: "2027-12-10",
    },
    {
      id: 5,
      name: "Omeprazole 20mg",
      category: "Acidity",
      stock: 8,
      price: 40,
      expiry: "2027-10-15",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Search medicines by name or category
  const filteredMedicines = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return medicines.filter(
      (medicine) =>
        medicine.name.toLowerCase().includes(searchText) ||
        medicine.category.toLowerCase().includes(searchText)
    );
  }, [medicines, search]);

  // Summary card values
  const totalMedicines = medicines.length;

  const lowStock = medicines.filter(
    (medicine) => medicine.stock <= 10
  ).length;

  const totalCategories = new Set(
    medicines.map((medicine) => medicine.category)
  ).size;

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredMedicines.length / itemsPerPage)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const visibleMedicines = filteredMedicines.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Delete medicine
  const deleteMedicine = (id) => {
    setMedicines((previousMedicines) =>
      previousMedicines.filter((medicine) => medicine.id !== id)
    );
    setCurrentPage(1);
  };

  // Search and reset pagination
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="medicines-page">

      {/* PAGE HEADER */}
      <div className="medicines-heading">
        <div className="medicines-title-section">
          <div className="medicines-heading-icon">💊</div>

          <div>
            <h1>Medicines</h1>
            <p>Manage all medicine details here</p>
          </div>
        </div>

        <button
          className="add-medicine-btn"
          type="button"
          onClick={() =>
            window.alert("Add Medicine form will be added next.")
          }
        >
          <span>＋</span>
          Add Medicine
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="medicine-summary">

        <div className="medicine-summary-card total-card">
          <div className="summary-icon">💊</div>

          <div className="summary-details">
            <h3>Total Medicines</h3>
            <h2>{totalMedicines}</h2>
            <p>↗ Medicine records</p>
          </div>

          <span className="summary-decoration">✚</span>
        </div>

        <div className="medicine-summary-card low-card">
          <div className="summary-icon">▦</div>

          <div className="summary-details">
            <h3>Low Stock</h3>
            <h2>{lowStock}</h2>
            <p>↗ Needs attention</p>
          </div>

          <span className="summary-decoration">⚠</span>
        </div>

        <div className="medicine-summary-card category-card">
          <div className="summary-icon">📦</div>

          <div className="summary-details">
            <h3>Total Categories</h3>
            <h2>{totalCategories}</h2>
            <p>↗ Medicine categories</p>
          </div>

          <span className="summary-decoration">◇</span>
        </div>

      </div>

      {/* MEDICINE TABLE */}
      <div className="medicine-table-card">

        <div className="medicine-table-heading">

          <div className="medicine-list-title">
            <div className="medicine-list-icon">📋</div>

            <div>
              <h2>Medicine List</h2>
              <p>View and manage medicines</p>
            </div>
          </div>

          <div className="medicine-search-box">
            <span>⌕</span>

            <input
              type="search"
              placeholder="Search medicines..."
              value={search}
              onChange={handleSearch}
            />
          </div>

        </div>

        <div className="medicine-table-scroll">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Medicine Name</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {visibleMedicines.map((medicine, index) => (
                <tr key={medicine.id}>
                  <td>{startIndex + index + 1}</td>

                  <td className="medicine-name">
                    {medicine.name}
                  </td>

                  <td>{medicine.category}</td>

                  <td>₹ {medicine.price.toFixed(2)}</td>

                  <td>{medicine.stock}</td>

                  <td>
                    <span
                      className={
                        medicine.stock <= 10
                          ? "medicine-low-stock"
                          : "medicine-available"
                      }
                    >
                      {medicine.stock <= 10
                        ? "Low Stock"
                        : "Available"}
                    </span>
                  </td>

                  <td>
                    <button
                      className="medicine-delete-btn"
                      type="button"
                      onClick={() => deleteMedicine(medicine.id)}
                    >
                      <span>▤</span> Delete
                    </button>
                  </td>
                </tr>
              ))}

              {visibleMedicines.length === 0 && (
                <tr>
                  <td colSpan="7" className="no-medicines">
                    No medicines found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER AND PAGINATION */}
        <div className="medicine-table-footer">
          <p>
            Showing{" "}
            {filteredMedicines.length === 0 ? 0 : startIndex + 1}
            {" "}to{" "}
            {Math.min(
              startIndex + itemsPerPage,
              filteredMedicines.length
            )}
            {" "}of {filteredMedicines.length} medicines
          </p>

          <div className="medicine-pagination">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
            >
              Previous
            </button>

            <button className="current-page" type="button">
              {currentPage}
            </button>

            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
            >
              Next
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Medicines;
