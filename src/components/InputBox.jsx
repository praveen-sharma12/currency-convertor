import { useId } from 'react';
import PropTypes from 'prop-types';
function InputBox({
	label,
	amount,
	onAmountChange,
	currencyList = [],
	selectCurrency = 'usd',
	onCurrencyChange,
	amountDisable = false,
	currencyDisable = false,
}) {
	const amountInput = useId();
	return (
		<div className='bg-white p-3 rounded-lg text-sm flex '>
			<div className='w-1/2'>
				<label
					htmlFor={amountInput}
					className='text-black/40 mb-2 inline-block'
				>
					{label}
				</label>
				<input
					id={amountInput}
					className='outline-none w-full bg-transparent py-1.5'
					type='number'
					placeholder={amount}
					disabled={amountDisable}
					value={amount}
					onChange={(e) => {
						onAmountChange && onAmountChange(Number(e.target.value));
					}}
				/>
			</div>
			<div className='w-1/2 flex flex-wrap justify-end text-right'>
				<p className='text-black/40 mb-2 w-full'>Currency Type</p>
				<select
					className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
					value={selectCurrency}
					onChange={(e) => {
						onCurrencyChange && onCurrencyChange(e.target.value);
					}}
					disabled={currencyDisable}
				>
					{currencyList.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
InputBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func,
  currencyList: PropTypes.array,
  selectCurrency: PropTypes.string,
  onCurrencyChange: PropTypes.func,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
};
export default InputBox;
