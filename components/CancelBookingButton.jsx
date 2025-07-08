'use client';
import cancelBooking from '@/app/actions/cancelBooking';
import { toast } from 'react-toastify';

const CancelBookingButton = ({ bookingId }) => {
	const handleCancelClick = async () => {
		if (!confirm('Are you sure you want to cancel this booking?')) {
			return;
		}

		const result = await cancelBooking(bookingId);
		if (result.error) {
			toast.error(result.error);
		}
		if (result.success) {
			toast.success('Booking cancelled successfully!');
		}
	};

	return (
		<button
			onClick={handleCancelClick}
			className='bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700'
		>
			Cancel Booking
		</button>
	);
};

export default CancelBookingButton;
