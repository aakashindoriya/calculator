export function calculateNewTaxRegimeHUF(taxableIncome, isNew) {
    let incomeTax = 0;
    let surcharge = 0;
    let healthAndEducationCess = 0;
    const taxSlabs = isNew ? [
        { range: 0, rate: 0 },
        { range: 300000, rate: 0.00 },
        { range: 600000, rate: 0.05 },
        { range: 900000, rate: 0.10 },
        { range: 1200000, rate: 0.15 },
        { range: 1500000, rate: 0.20 },
        { range: Infinity, rate: 0.30 }
    ] : [
        { range: 0, rate: 0 },
        { range: 250000, rate: 0.00 },
        { range: 500000, rate: 0.05 },
        { range: 1000000, rate: 0.20 },
        { range: Infinity, rate: 0.30 }
    ];

    // Iterate through the tax slabs to calculate the income tax
    for (let i = 1; i < taxSlabs.length; i++) {
        const { range, rate } = taxSlabs[i];
        const prevRange = taxSlabs[i - 1].range;

        if (taxableIncome <= range) {
            incomeTax += (taxableIncome - prevRange) * rate;
            break;
        } else {
            incomeTax += (range - prevRange) * rate;
        }
    }

    // Surcharge calculation
    if (taxableIncome > 10000000) {
        surcharge = taxableIncome * 0.07;
    }

    // Health and education cess calculation (4% of income tax and surcharge)
    healthAndEducationCess = (incomeTax + surcharge) * 0.04;

    // Calculate total tax liability
    const totalTaxLiability = incomeTax + surcharge + healthAndEducationCess;

    return { totalTaxLiability, incomeTax, surcharge, healthAndEducationCess };
}


export function calculateTaxForDomesticCompany(taxableIncome) {
    let incomeTax = 0;
    let surcharge = 0;
    let healthAndEducationCess = 0;

    incomeTax = taxableIncome * 0.30

    if (taxableIncome >= 10000000) {
        surcharge = incomeTax * 0.07;

    }
    // Health and education cess calculation (4% of income tax and surcharge)
    healthAndEducationCess = (incomeTax + surcharge) * 0.04;

    // Calculate total tax liability
    const totalTaxLiability = incomeTax + surcharge + healthAndEducationCess;

    return { totalTaxLiability, incomeTax, surcharge, healthAndEducationCess };
}



export function calculateTaxForForigenCompany(taxableIncome) {
    let incomeTax = 0;
    let surcharge = 0;
    let healthAndEducationCess = 0;

    incomeTax = taxableIncome * 0.40

    if (taxableIncome >= 10000000) {
        surcharge = incomeTax * 0.02;

    }
    // Health and education cess calculation (4% of income tax and surcharge)
    healthAndEducationCess = (incomeTax + surcharge) * 0.04;

    // Calculate total tax liability
    const totalTaxLiability = incomeTax + surcharge + healthAndEducationCess;

    return { totalTaxLiability, incomeTax, surcharge, healthAndEducationCess };
}

export function calculateTaxForFirmsAndLLP(taxableIncome) {
    let incomeTax = 0;
    let surcharge = 0;
    let healthAndEducationCess = 0;

    incomeTax = taxableIncome * 0.30

    if (taxableIncome >= 10000000) {
        surcharge = incomeTax * 0.12;

    }
    healthAndEducationCess = (incomeTax + surcharge) * 0.04;

    const totalTaxLiability = incomeTax + surcharge + healthAndEducationCess;

    return { totalTaxLiability, incomeTax, surcharge, healthAndEducationCess };
}

export function calculateTaxForCoprative(taxableIncome, isBAD) {
    let incomeTax = 0;
    let surcharge = 0;
    let healthAndEducationCess = 0;

    incomeTax = isBAD ? taxableIncome * 0.22 : taxableIncome * 0.15

    if (taxableIncome >= 10000000) {
        surcharge = incomeTax * 0.10;

    }
    healthAndEducationCess = (incomeTax + surcharge) * 0.04;

    const totalTaxLiability = incomeTax + surcharge + healthAndEducationCess;

    return { totalTaxLiability, incomeTax, surcharge, healthAndEducationCess };
}
