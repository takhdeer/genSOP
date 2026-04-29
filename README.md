# genSOP

An AI-powered Standard Operating Procedure (SOP) generator. Describe a process in plain English and genSOP produces a structured, formatted SOP document ready for export.

---

## Prerequisites

- Node.js v18 or higher
- A Gemini API key ([get one here](https://aistudio.google.com/app/apikey))

---

## Setup

**1. Clone the repository**

```bash
git clone https://github.com/takhdeer/genSOP.git
cd genSOP
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the root directory:

```
GEMINI_API_KEY=your_api_key_here
```

**4. Start the development server**

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

---

## How to Use

### Step 1 — Fill out the SOP details

When the app loads you will see a form with the following fields:

| Field | Description |
|---|---|
| **Title** | The name of the SOP (e.g. "Employee Offboarding Process") |
| **Department** | The team this SOP applies to (e.g. "IT", "HR", "Operations") |
| **Category** | The type of procedure (e.g. "Onboarding", "Security", "Maintenance") |
| **Description** | A plain English description of the process you want documented |

### Step 2 — Generate the SOP

Click **Generate SOP**. The app sends your inputs to the Gemini API and returns a structured SOP, typically including:

- Purpose
- Scope
- Responsibilities
- Step-by-step procedure
- Notes / exceptions

Generation usually takes 5–15 seconds depending on the complexity of your description.

### Step 3 — Review the output

The generated SOP renders in the preview panel with markdown formatting. Review the content and make sure it accurately reflects the process you described.

### Step 4 — Export

Once satisfied, you can export the SOP in two formats:

- **Markdown** — copies the raw markdown to your clipboard or downloads as a `.md` file
- **PDF** — exports a formatted, print-ready PDF via the PDF export button

---

## Tips for Better Output

- **Be specific in your description.** Instead of *"describe how we onboard employees"*, write *"describe the IT steps to onboard a new employee including account creation, hardware setup, and software installation"*
- **Include roles.** Mentioning who is responsible for what (e.g. *"the IT specialist sets up the laptop, the manager approves access"*) produces more accurate responsibility sections
- **Mention edge cases.** If there are exceptions to the process, include them in your description and they will appear in the Notes section

---

## Project Structure

```
genSOP/
├── src/
│   ├── components/       # UI components
│   ├── api/              # Gemini API integration
│   └── App.jsx           # Root component
├── .env                  # API key (not committed)
├── .env.example          # Template for environment setup
└── package.json
```

---

## Troubleshooting

**The app won't start**
- Confirm Node.js v18+ is installed: `node --version`
- Run `npm install` again to ensure all dependencies are present

**Generation fails or returns an error**
- Check that your `GEMINI_API_KEY` is set correctly in `.env`
- Ensure you have an active internet connection
- Check the Gemini API status at [status.cloud.google.com](https://status.cloud.google.com)

**PDF export is blank or malformed**
- Try refreshing the page and regenerating before exporting
- Ensure the SOP preview has fully loaded before clicking export

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

---

## License

MIT
