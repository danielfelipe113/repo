interface LayoutProps {
	rentedDaysLeft: number;
}

const RentedIndicator = ({ rentedDaysLeft }: LayoutProps) => {
	return (
		<div className="rounded bg-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-50 px-3 text-4xl py-2">
			Rented for another {rentedDaysLeft} day{rentedDaysLeft > 1 ? 's' : ''}
		</div>
	);
}

export default RentedIndicator;