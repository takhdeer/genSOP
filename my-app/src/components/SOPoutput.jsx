import ReactMarkdown from 'react-markdown'
import './Output.css'
import jsPDF from 'jspdf'

function exportPDF() {
    const doc = new jsPDF()
    const lines = doc.splitTextToSize(sopOutput, 180)
    doc.text(lines, 15, 15)
    doc.save("SOP.pdf")
}

export default function SOPoutput({sopOutput, isLoading}) {
    if (isLoading) return <p>Generating SOP Document</p>
    if (!sopOutput) return <p>Beging typing to generate SOP document</p>

    return (
        <div style={{whiteSpace: "pre-wrap"}}>
            <div className='sop-output'>
                <ReactMarkdown> {sopOutput} </ReactMarkdown>
            </div>
        <button onClick={exportPDF}>Export as a PDF</button>
        </div>
    );
}