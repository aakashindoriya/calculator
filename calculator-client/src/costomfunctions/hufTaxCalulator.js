function calculateTaxForHUF(taxableIncome) {
    let incomeTax = 0;
    let surcharge = 0;
    let healthAndEducationCess = 0;

    // Tax slabs for the assessment year 2023-2024
    const taxSlabs = [
        { range: 250000, rate: 0 },
        { range: 500000, rate: 0.05 },
        { range: 750000, rate: 0.1 },
        { range: 1000000, rate: 0.15 },
        { range: 1250000, rate: 0.2 },
        { range: 1500000, rate: 0.25 },
        { range: Infinity, rate: 0.3 }
    ];

    // Iterate through the tax slabs to calculate the income tax
    for (let i = 0; i < taxSlabs.length; i++) {
        const { range, rate } = taxSlabs[i];

        if (taxableIncome <= range) {
            incomeTax += taxableIncome * rate;
            break;
        } else {
            incomeTax += range * rate;
            taxableIncome -= range;
        }
    }

    // Surcharge calculation (no surcharge applicable for HUFs)

    // Health and education cess calculation (4% of income tax)
    healthAndEducationCess = incomeTax * 0.04;

    // Calculate total tax liability
    const totalTaxLiability = incomeTax + surcharge + healthAndEducationCess;

    return { totalTaxLiability, incomeTax, surcharge, healthAndEducationCess };
}
