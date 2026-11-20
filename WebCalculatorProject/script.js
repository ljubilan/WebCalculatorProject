
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CONVERSION CALCULATOR
    // ==========================================

    const conversionType = document.getElementById("conversionType");
    const conversionDirection = document.getElementById("conversionDirection");
    const conversionValue = document.getElementById("conversionValue");
    const convertButton = document.getElementById("convertButton");
    const conversionResult = document.getElementById("conversionResult");

    if (conversionType && conversionDirection && convertButton) {

        function updateConversionOptions() {

            conversionDirection.innerHTML = "";

            let options = [];

            if (conversionType.value === "temperature") {
                options = [
                    ["forward", "Celsius to Fahrenheit"],
                    ["reverse", "Fahrenheit to Celsius"]
                ];
            }

            else if (conversionType.value === "distance") {
                options = [
                    ["forward", "Kilometers to Miles"],
                    ["reverse", "Miles to Kilometers"]
                ];
            }

            else if (conversionType.value === "weight") {
                options = [
                    ["forward", "Kilograms to Pounds"],
                    ["reverse", "Pounds to Kilograms"]
                ];
            }

            options.forEach(function (item) {
                const option = document.createElement("option");
                option.value = item[0];
                option.textContent = item[1];
                conversionDirection.appendChild(option);
            });
        }

        conversionType.addEventListener("change", updateConversionOptions);

        updateConversionOptions();

        convertButton.addEventListener("click", function () {

            const value = Number(conversionValue.value);
            const type = conversionType.value;
            const direction = conversionDirection.value;

            if (conversionValue.value.trim() === "") {
                conversionResult.textContent = "Please enter a value.";
                return;
            }

            if (!Number.isFinite(value)) {
                conversionResult.textContent = "Please enter a valid number.";
                return;
            }

            let result;
            let unit;

            if (type === "temperature") {

                if (direction === "forward") {
                    result = (value * 9 / 5) + 32;
                    unit = "°F";
                }
                else {
                    result = (value - 32) * 5 / 9;
                    unit = "°C";
                }

            }

            else if (type === "distance") {

                if (direction === "forward") {
                    result = value * 0.621371;
                    unit = "miles";
                }
                else {
                    result = value / 0.621371;
                    unit = "kilometers";
                }

            }

            else if (type === "weight") {

                if (direction === "forward") {
                    result = value * 2.20462;
                    unit = "pounds";
                }
                else {
                    result = value / 2.20462;
                    unit = "kilograms";
                }

            }

            conversionResult.textContent =
                "Result: " + result.toFixed(2) + " " + unit;

        });

    }


    // ==========================================
    // INCOME TAX CALCULATOR
    // ==========================================

    const annualIncome = document.getElementById("annualIncome");
    const taxButton = document.getElementById("taxButton");
    const taxResult = document.getElementById("taxResult");

    if (annualIncome && taxButton && taxResult) {

        taxButton.addEventListener("click", function () {

            const income = Number(annualIncome.value);

            if (annualIncome.value.trim() === "") {
                taxResult.textContent = "Please enter your annual income.";
                return;
            }

            if (!Number.isFinite(income) || income < 0) {
                taxResult.textContent = "Please enter a valid income.";
                return;
            }

            let tax = 0;

            if (income <= 250000) {
                tax = 0;
            }
            else if (income <= 400000) {
                tax = (income - 250000) * 0.15;
            }
            else if (income <= 800000) {
                tax = 22500 + (income - 400000) * 0.20;
            }
            else if (income <= 2000000) {
                tax = 102500 + (income - 800000) * 0.25;
            }
            else if (income <= 8000000) {
                tax = 402500 + (income - 2000000) * 0.30;
            }
            else {
                tax = 2202500 + (income - 8000000) * 0.35;
            }

            const netIncome = income - tax;

            taxResult.innerHTML =
                "<strong>Annual Taxable Income:</strong> ₱" +
                income.toLocaleString("en-PH", { minimumFractionDigits: 2 }) +
                "<br><br>" +

                "<strong>Annual Income Tax:</strong> ₱" +
                tax.toLocaleString("en-PH", { minimumFractionDigits: 2 }) +
                "<br><br>" +

                "<strong>Net Income:</strong> ₱" +
                netIncome.toLocaleString("en-PH", { minimumFractionDigits: 2 });

        });

    }


    // ==========================================
    // FACTORIAL CALCULATOR (WHILE LOOP)
    // ==========================================

    const factorialInput = document.getElementById("factorialInput");
    const factorialButton = document.getElementById("factorialButton");
    const factorialResult = document.getElementById("factorialResult");

    if (factorialInput && factorialButton && factorialResult) {

        factorialButton.addEventListener("click", function () {

            const number = Number(factorialInput.value);

            if (factorialInput.value.trim() === "") {
                factorialResult.textContent = "Please enter a number.";
                return;
            }

            if (!Number.isInteger(number) || number < 0 || number > 170) {
                factorialResult.textContent =
                    "Enter a whole number from 0 to 170.";
                return;
            }

            let factorial = 1;
            let counter = 1;

            while (counter <= number) {
                factorial = factorial * counter;
                counter++;
            }

            factorialResult.textContent = "Factorial: " + factorial;

        });

    }


    // ==========================================
    // SUMMATION CALCULATOR (DO-WHILE LOOP)
    // ==========================================

    const sumInput = document.getElementById("sumInput");
    const sumButton = document.getElementById("sumButton");
    const sumResult = document.getElementById("sumResult");

    if (sumInput && sumButton && sumResult) {

        sumButton.addEventListener("click", function () {

            const number = Number(sumInput.value);

            if (sumInput.value.trim() === "") {
                sumResult.textContent = "Please enter a number.";
                return;
            }

            if (!Number.isInteger(number) || number < 1 || number > 100000) {
                sumResult.textContent =
                    "Enter a whole number from 1 to 100,000.";
                return;
            }

            let sum = 0;
            let counter = 1;

            do {
                sum += counter;
                counter++;
            } while (counter <= number);

            sumResult.textContent = "Summation: " + sum.toLocaleString();

        });

    }


    // ==========================================
    // AVERAGE CALCULATOR (FOR LOOP)
    // ==========================================

    const averageInput = document.getElementById("averageInput");
    const averageButton = document.getElementById("averageButton");
    const averageResult = document.getElementById("averageResult");

    if (averageInput && averageButton && averageResult) {

        averageButton.addEventListener("click", function () {

            const input = averageInput.value.trim();

            if (input === "") {
                averageResult.textContent = "Please enter numbers.";
                return;
            }

            const numbers = input.split(",").map(Number);

            if (numbers.some(function (number) {
                return !Number.isFinite(number);
            })) {
                averageResult.textContent =
                    "Please enter valid numbers separated by commas.";
                return;
            }

            let sum = 0;

            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }

            const average = sum / numbers.length;

            averageResult.textContent =
                "Average: " + average.toFixed(2);

        });

    }


    // ==========================================
    // PAYROLL CALCULATOR
    // ==========================================

    const employeeName = document.getElementById("employeeName");
    const dailyRate = document.getElementById("dailyRate");
    const daysWorked = document.getElementById("daysWorked");
    const overtimeHours = document.getElementById("overtimeHours");
    const overtimeRate = document.getElementById("overtimeRate");
    const deductions = document.getElementById("deductions");
    const payrollButton = document.getElementById("payrollButton");
    const payrollResult = document.getElementById("payrollResult");

    if (
        employeeName &&
        dailyRate &&
        daysWorked &&
        overtimeHours &&
        overtimeRate &&
        deductions &&
        payrollButton &&
        payrollResult
    ) {

        payrollButton.addEventListener("click", function () {

            const name = employeeName.value.trim();
            const rate = Number(dailyRate.value);
            const days = Number(daysWorked.value);
            const otHours = Number(overtimeHours.value);
            const otRate = Number(overtimeRate.value);
            const totalDeductions = Number(deductions.value);

            if (
                name === "" ||
                dailyRate.value === "" ||
                daysWorked.value === "" ||
                overtimeHours.value === "" ||
                overtimeRate.value === "" ||
                deductions.value === ""
            ) {
                payrollResult.textContent = "Please fill in all fields.";
                return;
            }

            if (
                !Number.isFinite(rate) ||
                !Number.isFinite(days) ||
                !Number.isFinite(otHours) ||
                !Number.isFinite(otRate) ||
                !Number.isFinite(totalDeductions)
            ) {
                payrollResult.textContent = "Please enter valid numbers.";
                return;
            }

            if (
                rate < 0 ||
                days < 0 ||
                otHours < 0 ||
                otRate < 0 ||
                totalDeductions < 0
            ) {
                payrollResult.textContent = "Values cannot be negative.";
                return;
            }

            if (!Number.isInteger(days) || days > 31) {
                payrollResult.textContent =
                    "Days worked must be a whole number from 0 to 31.";
                return;
            }

            const regularSalary = rate * days;
            const overtimePay = otHours * otRate;
            const grossSalary = regularSalary + overtimePay;
            const netSalary = grossSalary - totalDeductions;

            if (netSalary < 0) {
                payrollResult.textContent =
                    "Deductions cannot exceed gross salary.";
                return;
            }

            function money(amount) {
                return amount.toLocaleString("en-PH", {
                    style: "currency",
                    currency: "PHP",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }

            payrollResult.innerHTML =
                "<strong>Employee:</strong> " + name +
                "<br><br>" +

                "<strong>Regular Salary:</strong> " +
                money(regularSalary) +
                "<br>" +

                "<strong>Overtime Pay:</strong> " +
                money(overtimePay) +
                "<br>" +

                "<strong>Gross Salary:</strong> " +
                money(grossSalary) +
                "<br><br>" +

                "<strong>Total Deductions:</strong> " +
                money(totalDeductions) +
                "<br><br>" +

                "<strong>Net Salary:</strong> " +
                money(netSalary);

        });

    }

    console.log("All calculator event listeners initialized.");

});
