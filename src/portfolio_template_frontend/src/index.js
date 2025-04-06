import { portfolio_template_backend } from "../../declarations/portfolio_template_backend";

document.addEventListener("DOMContentLoaded", async () => {
    // --- Load Visit Count ---
    try {
        const visitCount = await portfolio_template_backend.recordVisit();
        const visitEl = document.querySelector(".num_of_people_visited");
        visitEl.textContent = `${visitCount}`;
    } catch (error) {
        console.error("Error fetching visit count:", error);
    }

    // --- Button Click Logic ---
    const button = document.getElementById("clickOnceBtn");
    const clickCountEl = document.querySelector(".num_of_button_clicks");
    let hasClicked = false;

    button.addEventListener("click", async () => {
        if (!hasClicked) {
            hasClicked = true;
            clickCountEl.textContent = "1";

            // Optional: disable the button to give visual feedback
            button.disabled = true;
            button.textContent = "Clicked!";

            // Optional: call backend function if needed
            // await portfolio_template_backend.recordClick(); // <- You would need to add this to your Motoko backend
        }
    });
});