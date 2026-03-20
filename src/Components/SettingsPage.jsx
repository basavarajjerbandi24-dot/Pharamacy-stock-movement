import React, { useState } from 'react';
import './SettingsPage.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export default function SettingsPage({ onBack }) {
  const [typeOfTax, setTypeOfTax] = useState('');
  const [agency, setAgency] = useState('');
  const [regNum, setRegNum] = useState('');
  const [regDate, setRegDate] = useState(null);
  const [modvat, setModvat] = useState(false);
  const [expiresOn, setExpiresOn] = useState('');
  const [activatesFrom, setActivatesFrom] = useState('');
  const [message, setMessage] = useState('');

//   function formatToDDMMYYYY(dateStr) {
//   if (!dateStr) return null;
//   const [year, month, day] = dateStr.split("-");
//   return `${day}/${month}/${year}`;

// }




  const handleAddTax = async () => {
    if (!typeOfTax || !agency || !regNum || !regDate) {
      setMessage('Please fill required fields: Type of Tax, Agency, Tax #, Date of Issue.');
      return;
    }


    try {
      const response = await fetch('http://localhost:8080/api/tax/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteId: 1,
          typeOfTaxId: typeOfTax,
          agency,
          regNum,
          regDate,
          modvat,
          createdBy: 'admin',
          isActive: true,
          expiresOn: expiresOn || null,
          activatesFrom: activatesFrom,
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        setMessage('Save failed: ' + err);
        return;
      }
      const saved = await response.json();
      setMessage(`Saved: ${saved.id || 'success'}`);
      setTypeOfTax('');
      setAgency('');
      setRegNum('');
      setRegDate('');
      setModvat(false);
      setExpiresOn('');
      setActivatesFrom('');
    } catch (error) {
      console.error(error);
      setMessage('Save failed. Check backend server.');
    }
  };

  const handleClearForm = () => {
    setTypeOfTax('');
    setAgency('');
    setRegNum('');
    setRegDate('');
    setModvat(false);
    setExpiresOn('');
    setActivatesFrom('');
    setMessage('');
  };

  

  return (
    <div className="settings-page">
      <header className="settings-header">
        <div className="settings-header-title">Pharmacy Settings</div>
        <button className="back-btn" onClick={onBack}> Back</button>
      </header>

      <div className="settings-body">
        <aside className="settings-nav">
          <div className="settings-nav-item active">General Settings</div>
          <div className="settings-nav-item">Tax Masters</div>
          <div className="settings-nav-item">Item Groups</div>
          <div className="settings-nav-item">Item Masters</div>
          <div className="settings-nav-item">Vendors</div>
          <div className="settings-nav-item">Stock Areas/Counters</div>
          <div className="settings-nav-item">Stock Area - User Mapping</div>
          <div className="settings-nav-item">Stock Area Reorder Level</div>
          <div className="settings-nav-item">Opening Stocks (Area)</div>
          <div className="settings-nav-item">Opening Stocks (Item)</div>
          <div className="settings-nav-item">Alert Configurations</div>
          <div className="settings-nav-item">Insurance Exclusions</div>
        </aside>

        <main className="settings-content">
          <div className="settings-panel">
            <div className="settings-panel-title">Tax Registration Numbers</div>
            <div className="settings-panel-row">
              <div className="field">
                <label>Type Of Tax*</label>
                <select value={typeOfTax} onChange={(e) => setTypeOfTax(e.target.value)}>
                  <option value="">Select type</option>
                  <option value="GST">GST</option>
                  <option value="TCS">TCS</option>
                  <option value="VAT">VAT</option>
                </select>
              </div>
              <div className="field">
                <label>Agency*</label>
                <input value={agency} onChange={(e) => setAgency(e.target.value)} placeholder="Agency" />
              </div>
              <div className="field">
                <label>Tax #*</label>
                <input value={regNum} onChange={(e) => setRegNum(e.target.value)} placeholder="Enter tax number" />
              </div>
              <div className="field">
                <label>Date Of Issue*</label>
                <input type="date" value={regDate} onChange={(e) => setRegDate(e.target.value)} />
                {/* <small>Selected: {formatDate(regDate)}</small> */}
                
              </div>
            </div>
            <div className="settings-panel-row">
              <div className="field">
                <label>Expires On</label>
                <input type="date" value={expiresOn} onChange={(e) => setExpiresOn(e.target.value)} />
              </div>
              <div className="field">
                <label>Activates From</label>
                <input type="date" value={activatesFrom} onChange={(e) => setActivatesFrom(e.target.value)} />
              </div>
              {/* <div className="field">
                <label>Modvat</label>
                  <input type="checkbox" checked={modvat} onChange={(e) => setModvat(e.target.checked)} />
              </div> */}
              <div className="field checkbox">
                <label htmlFor="modvat">Modvat</label>
                <input
                  id="modvat"
                  type="checkbox"
                  checked={modvat}
                  onChange={(e) => setModvat(e.target.checked)}
                />
              </div>
              <div className="field" />
            </div>

            <div className="settings-panel-actions">
              <button className="button-primary" onClick={handleAddTax}>Add</button>
              <button className="button-secondary" onClick={handleClearForm}>Clear</button>
            </div>
            {message && <div style={{ marginBottom: 12, fontSize: '0.95rem', color: '#333' }}>{message}</div>}

            <div className="settings-table">
              <div className="settings-table-row header">
                <div>Tax Type</div>
                <div>Tax #</div>
                <div>Date</div>
                <div>Modvat</div>
              </div>
            </div>
          </div>

          <aside className="settings-side">
            <div className="settings-side-panel">
              <div className="settings-side-title">Item Storage Policies</div>
              <div className="settings-side-row">
                <input placeholder="Item Storage Policy*" />
                <button className="button-primary small">Add</button>
                <button className="button-secondary small">Clear</button>
              </div>
              <div className="settings-side-list">
                <div className="settings-side-list-item">Policy 1</div>
                <div className="settings-side-list-item">Policy 2</div>
              </div>
            </div>

            <div className="settings-side-panel">
              <div className="settings-side-title">Bill Cancellation Settings</div>
              <label className="settings-radio">
                <input type="radio" name="billCancel" /> Cancel Bill in Current Shift
              </label>
              <label className="settings-radio">
                <input type="radio" name="billCancel" /> Cancel Bill Beyond Shift
              </label>
              <div className="settings-row">
                <label>Variance % for Edit Rate in PO & GRN:</label>
                <input placeholder="0" />
              </div>
            </div>

            <div className="settings-side-panel">
              <div className="settings-side-title">Sales Expiry Alert</div>
              <div className="settings-row">
                <label>Show Expiry Alert in:</label>
                <input placeholder="90" style={{ width: '80px' }} />
                <span>Days</span>
                <button className="button-primary small">Save</button>
              </div>
              <div className="settings-row">
                <label>GRN Expiry Alert</label>
                <input placeholder="30" style={{ width: '80px' }} />
                <span>Days</span>
                <button className="button-primary small">Save</button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
