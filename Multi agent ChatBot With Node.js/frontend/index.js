async function main() {
    const response = await fetch("http://localhost:5678/webhook/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "How can I make my CV more ATS friendly?"
        })
    });

    const data = await response.json();

    console.log(data);
    console.log("AI Response:");
    console.log(data.output);
    console.log("Agent:");
    console.log(data.agent);
}

main();