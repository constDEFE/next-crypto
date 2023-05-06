export const formatCurrency = (value: number) => {
	return value.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 5
	});
};

export const formatDate = (date: string | number | Date) => {
	return new Date(date).toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
};

export const formatPercentage = (value: number) => {
	return (value / 100).toLocaleString("en-US", {
		style: "percent",
		maximumFractionDigits: 5
	});
};
