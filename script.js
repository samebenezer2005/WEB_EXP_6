$(document).ready(function() {
    // Function to perform the budget calculations and display results
    function evaluateMoney() {
        // Get input values
        let totalAmount = parseFloat($("#amount").val());
        let roomRentPct = parseFloat($("#roomRentPct").val());
        let accessoriesPct = parseFloat($("#accessoriesPct").val());
        let emergencyPct = parseFloat($("#emergencyPct").val());
        let savingPct = parseFloat($("#savingPct").val());

        // Validate inputs for total amount and percentages first
        if (isNaN(totalAmount) || totalAmount <= 0) {
            alert("Please enter a valid total amount.");
            // Clear previous results if input is invalid
            $("#roomRentAmt").text("Rs.0.00");
            $("#accessoriesAmt").text("Rs.0.00");
            $("#emergencyAmt").text("Rs.0.00");
            $("#savingAmt").text("Rs.0.00");
            return; // Stop execution
        }

        if (isNaN(roomRentPct) || isNaN(accessoriesPct) || isNaN(emergencyPct) || isNaN(savingPct)) {
            alert("Please enter valid percentage values for all categories.");
            // Clear previous results if input is invalid
            $("#roomRentAmt").text("Rs.0.00");
            $("#accessoriesAmt").text("Rs.0.00");
            $("#emergencyAmt").text("Rs.0.00");
            $("#savingAmt").text("Rs.0.00");
            return; // Stop execution
        }

        // Calculate total percentage for validation alert
        let totalPercentage = roomRentPct + accessoriesPct + emergencyPct + savingPct;

        // Check if total percentage is 100% and show alert if not
        if (totalPercentage !== 100) {
            alert("The sum of percentages must be 100%. Current sum: " + totalPercentage + "%");
            // Optionally, you might want to clear results here too if you don't want to show
            // calculations for non-100% sums, or you can let them display if desired.
            // For now, if the sum is not 100%, the alert shows and no calculations are displayed.
            $("#roomRentAmt").text("Rs.0.00");
            $("#accessoriesAmt").text("Rs.0.00");
            $("#emergencyAmt").text("Rs.0.00");
            $("#savingAmt").text("Rs.0.00");
            return; // Stop execution as percentage sum is invalid
        }

        // If all validations pass, proceed with calculations
        let roomRentAmount = (totalAmount * roomRentPct) / 100;
        let accessoriesAmount = (totalAmount * accessoriesPct) / 100;
        let emergencyAmount = (totalAmount * emergencyPct) / 100;
        let savingAmount = (totalAmount * savingPct) / 100;

        // Display results
        $("#roomRentAmt").text("Rs." + roomRentAmount.toFixed(2));
        $("#accessoriesAmt").text("Rs." + accessoriesAmount.toFixed(2));
        $("#emergencyAmt").text("Rs." + emergencyAmount.toFixed(2));
        $("#savingAmt").text("Rs." + savingAmount.toFixed(2));
    }

    // ONLY bind the evaluateMoney function to the 'click' event of the "Evaluate My Money" button
    $("#evaluateBtn").click(evaluateMoney);

    // Initial call to set amounts to 0.00 on page load, as no evaluation has happened yet
    // This is optional, but provides a cleaner initial state.
    $("#roomRentAmt").text("Rs.0.00");
    $("#accessoriesAmt").text("Rs.0.00");
    $("#emergencyAmt").text("Rs.0.00");
    $("#savingAmt").text("Rs.0.00");
});
