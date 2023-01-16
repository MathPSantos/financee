export const CompoundInterest = () => {
  const initialMoney = 44000;
  const monthInvest = 3000;
  const years = 20;
  const annualInterestRate = 0.1145;
  const monthlyInterestRate = (1 + annualInterestRate) ** (1 / 12) - 1;
  const yearIncreaseInvestPercent = 0.1;

  console.log(monthlyInterestRate);

  const handleCompoundInterestSimulation = (): number[] => {
    const months = years * 12;
    const results: number[] = [];

    for (let i = 1; i <= months; i++) {
      const formulaResult =
        (initialMoney + i * monthInvest) * (1 + monthlyInterestRate) ** i;
      const monthlyInvestment =
        i >= 12
          ? results[i - 12] * (1 + yearIncreaseInvestPercent)
          : monthInvest;

      results.push(formulaResult);
    }

    return results;
  };

  return (
    <div>
      {handleCompoundInterestSimulation().map((item) => (
        <p>
          {item.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </p>
      ))}
    </div>
  );
};
