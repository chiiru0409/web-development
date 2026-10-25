const connectBtn = document.getElementById("connectBtn");
const result = document.getElementById("result");

connectBtn.addEventListener("click", async () => {
    result.textContent = "Connecting to backend...";
    connectBtn.disabled = true;

    try {
        const response = await fetch(
            "http://localhost:3000/api/hello"
        );

        if (!response.ok) {
            throw new Error("Server returned an error.");
        }

        const data = await response.json();

        result.textContent = data.message;
    } catch (error) {
        result.textContent =
            "Connection failed. Make sure the backend is running.";

        console.error(error);
    } finally {
        connectBtn.disabled = false;
    }
});