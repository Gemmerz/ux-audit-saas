import { useState } from "react";

// Type definitions
type Issue = {
  type: string;
  description: string;
  severity: "Critical" | "Medium" | "Warning";
};

type AuditResults = {
  accessibilityScore: number;
  ndFriendliness: number;
  totalIssues: number;
  issues: Issue[];
};

export default function Dashboard() {
  // Sample JSON data for demo
  const [auditResults, setAuditResults] = useState<AuditResults>({
    accessibilityScore: 78,
    ndFriendliness: 64,
    totalIssues: 12,
    issues: [
      {
        type: "Contrast",
        description: "Button text blends into background for colorblind users.",
        severity: "Critical",
      },
      {
        type: "Font Size",
        description: "Body text smaller than 16px on mobile view.",
        severity: "Medium",
      },
      {
        type: "Animation",
        description: "Autoplaying animation may cause sensory overload.",
        severity: "Warning",
      },
    ],
  });

  // Example fix button handler
  const applyFix = (index: number) => {
    alert(`Applied fix for: ${auditResults.issues[index].type}`);
  };

  return (
    <div className="flex h-screen font-sans bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-50 p-6 flex flex-col">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-6">Embodied Light Audit</h2>
        <nav className="flex flex-col space-y-3">
          <a href="#" className="text-indigo-700 hover:text-indigo-900 rounded-md px-2 py-1 focus:outline focus:outline-indigo-300">Home</a>
          <a href="#" className="text-indigo-700 hover:text-indigo-900 rounded-md px-2 py-1 focus:outline focus:outline-indigo-300">Audits</a>
          <a href="#" className="text-indigo-700 hover:text-indigo-900 rounded-md px-2 py-1 focus:outline focus:outline-indigo-300">Team</a>
          <a href="#" className="text-indigo-700 hover:text-indigo-900 rounded-md px-2 py-1 focus:outline focus:outline-indigo-300">Settings</a>
        </nav>
        <div className="mt-auto pt-6">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg focus:outline focus:outline-indigo-300">New Audit</button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-10 overflow-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-indigo-900">Dashboard</h1>
          <p className="mt-2 text-indigo-800">Track your website or design audits. Click “New Audit” to start a scan.</p>
        </header>

        {/* Scorecards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Accessibility Score</h3>
            <div className="text-indigo-700 text-3xl font-bold">{auditResults.accessibilityScore} / 100</div>
            <p className="mt-2 text-indigo-800">WCAG 2.2 compliance and ARIA best practices.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">ND-Friendliness</h3>
            <div className="text-indigo-700 text-3xl font-bold">{auditResults.ndFriendliness} / 100</div>
            <p className="mt-2 text-indigo-800">Typography, motion, and cognitive load heuristics.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Recent Issues</h3>
            <div className="text-indigo-700 text-3xl font-bold">{auditResults.totalIssues}</div>
            <p className="mt-2 text-indigo-800">Total flagged issues requiring fixes.</p>
          </div>
        </section>

        {/* Issues Table */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Issue List</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-indigo-100">
                <th className="text-left px-4 py-2">Type</th>
                <th className="text-left px-4 py-2">Description</th>
                <th className="text-left px-4 py-2">Severity</th>
                <th className="text-left px-4 py-2">Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-indigo-100">
              {auditResults.issues.map((issue, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-indigo-800 font-medium">{issue.type}</td>
                  <td className="px-4 py-2 text-indigo-700">{issue.description}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      issue.severity === "Critical"
                        ? "text-red-600"
                        : issue.severity === "Medium"
                        ? "text-yellow-600"
                        : "text-orange-600"
                    }`}
                  >
                    {issue.severity}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => applyFix(index)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md focus:outline focus:outline-indigo-300"
                    >
                      Apply Fix
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Recent Audits Placeholder */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Recent Audits</h2>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-indigo-800">Your latest audit will appear here after scanning a URL or design file.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
