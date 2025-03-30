import { calculateInvestmentResults, formatter } from '../../util/investment';

const InvestmentResult = ({ investmentData }) => {
  const investmentResultsData = calculateInvestmentResults(investmentData);
  const initialInvestment =
    investmentResultsData[0].valueEndOfYear -
    investmentResultsData[0].interest -
    investmentData.initialInvestment;

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResultsData.map((investment) => {
          const totalInterest =
            investment.valueEndOfYear -
            investment.annualInvestment * investment.year -
            initialInvestment;
          const totalAmountInvested = investment.valueEndOfYear - totalInterest;

          return (
            <tr key={investment.year}>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentResult;
