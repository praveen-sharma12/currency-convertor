import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
	const [data, setdata] = useState({});
	useEffect(() => {
		fetch(
			`https://v6.exchangerate-api.com/v6/5bce8dca362ca73fa971941f/latest/${currency}`
		)
			.then((res) => res.json())
			.then((res) => setdata(res['conversion_rates']));
	}, [currency]);
	return data;
}

export default useCurrencyInfo;
