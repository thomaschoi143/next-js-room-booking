'use client';
import { FaTrash } from 'react-icons/fa';
import deleteRoom from '@/app/actions/deleteRoom';
import { toast } from 'react-toastify'; // need to be in client components

const DeleteRoomButton = ({ roomId }) => {
	// onClick event handler: a client-side function, need to be in client component
	const handleDelete = async () => {
		// window: browser-only API, need to be in client components
		const confirmed = window.confirm('Are you sure you want to delete this room?');

		if (confirmed) {
			const state = await deleteRoom(roomId);
			if (state.error) {
				toast.error('Failed to delete room');
			} else {
				toast.success('Room deleted successfully!');
			}
		}
	};

	return (
		<button
			onClick={handleDelete}
			className='bg-red-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-red-700'
		>
			<FaTrash className='inline mr-1' /> Delete
		</button>
	);
};

export default DeleteRoomButton;
