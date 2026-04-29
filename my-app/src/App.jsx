import { useState } from "react";
import "./index.css";

const DEPARTMENTS = ["Hardware", "Software", "Network", "Security", "HR", "Operations", "Finance"];
const CATEGORIES  = ["Technical", "Administrative", "Compliance", "Onboarding", "Offboarding", "Maintenance"];

export default function App() {
  const [prompt, setPrompt]         = useState("");
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [category, setCategory]     = useState(CATEGORIES[0]);
  const [output, setOutput]         = useState("");
  const [loading, setLoading]       = useState(false);
  const [copied, setCopied]         = useState(false);

  async function handleSubmit() {
    if (!prompt.trim()) return;
    setLoading(true);
    setOutput("");

    try {
      // Replace with your actual Gemini API call
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, department, category }),
      });
      const data = await res.json();
      setOutput(data.sop || "No output returned.");
    } catch (err) {
      setOutput("Error generating SOP. Check your API configuration.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Gen<span>SOP</span></h1>
        <p>// AI-powered standard operating procedure generator</p>
      </header>

      <main>
        <div className="form-card">
          <label className="field-label" htmlFor="prompt">Describe the process</label>
          <textarea
            id="prompt"
            className="prompt-field"
            placeholder="e.g. Describe the steps an IT specialist takes to onboard a new employee, including account creation, hardware setup, and access provisioning..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
          />

          <div className="select-row">
            <div className="select-group">
              <label className="field-label" htmlFor="department">Department</label>
              <select
                id="department"
                className="form-select"
                value={department}
                onChange={e => setDepartment(e.target.value)}
              >
                {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
              </select>
            </div>

            <div className="select-group">
              <label className="field-label" htmlFor="category">Category</label>
              <select
                id="category"
                className="form-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <button
            className="btn-submit"
            onClick={handleSubmit}
            disabled={loading || !prompt.trim()}
          >
            {loading && <span className="spinner" />}
            {loading ? "Generating..." : "Generate SOP"}
          </button>
        </div>

        {(output || loading) && (
          <div className="output-section fade-up">
            <div className="output-header">
              <span className="output-label">Output</span>
              {output && (
                <button
                  className={`btn-copy ${copied ? "copied" : ""}`}
                  onClick={handleCopy}
                >
                  {copied ? "Copied" : "Copy to clipboard"}
                </button>
              )}
              {loading && <span className="output-status">generating...</span>}
            </div>

            <div className={`output-box ${output ? "has-content" : ""}`}>
              {output || <span className="output-empty-hint">Waiting for response...</span>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}