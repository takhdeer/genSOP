export async function genSOP(category, description, type) {
    const prompt = `You are an expert operations and process documentation specialist responsible for creating clear, concise, and professional Standard Operating Procedures (SOPs). Your task is to generate a complete SOP based on the following three user inputs: (1) Process Name and Context, (2) Target Audience or Role the SOP applies to, and (3) Key Steps or Process Details. The SOP must be structured and easy to follow, written in a formal and instructional tone, and should avoid ambiguity. Ensure the output includes the following sections in order: Title — provide a clear and descriptive name of the procedure; Purpose — explain why this process exists and its objective; Scope — define who this procedure applies to and any boundaries; Prerequisites — list any requirements, tools, or conditions needed before starting; Steps — provide numbered, sequential instructions that are detailed and actionable; Notes/Warnings — include important cautions, edge cases, or common mistakes to avoid; Revision History — include version number, date, and a brief description of changes. Make sure the SOP is logically organized, easy to understand for the intended audience, and detailed enough to be followed without additional guidance.Category: ${category}, Audience: ${type}, Process discription: ${description}`
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: prompt }
                        ]
                    }
                ]
            })
        }
    )

    const data = await response.json()
    console.log(data)
    return data.candidates[0].content.parts[0].text
}