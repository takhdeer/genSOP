export default function InputForm(
    {description, setDescription, category, setCategory, type, 
    setType, sopOutput, setSopOutput, isLoading, setIsLoading, onSubmit}) {
    return (
        <div>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Type Prompt Here"
            />

            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value = "Hardware">Hardware</option>
                <option value = "Software">Software</option>
                <option value = "Security">Security</option>
                <option value = "Other">Other</option>
            </select>

            <select value={type} onChange={e => setType(e.target.value)}>
                <option value = "Technical">Technical</option>
                <option value = "Non-Technical">Non-Technical</option>
            </select>

            <button onClick={onSubmit} disabled={isLoading}>
                {setIsLoading ? "Loading..." : "Submit"}
            </button>
        </div>
    );
}