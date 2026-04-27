export default function SOPoutput({sopOutput, isLoading}) {
    if (isLoading) return <p>Generating SOP Document</p>
    if (!sopOutput) return <p>Beging typing to generate SOP document</p>

    return (
        <div style={{whiteSpace: "pre-wrap"}}>
            {sopOutput}
        </div>
    );
}