import axios from 'axios';
import { FormEvent, useState } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap';
import Toastify from 'toastify-js';

function EventForm() {
	const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tableSize, setTableSize] = useState('');
	const [date, setDate] = useState('')
	const [startTime, setStartTime] = useState('')
	const [endTime, setEndTime] = useState('')
  

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		console.log(name, email, tableSize, date, startTime, endTime);
		const url = import.meta.env.VITE_API_URL;
        const startDateTime = new Date(`${date} ${startTime}`)
        const endDateTime = new Date(`${date} ${endTime}`)

		const booking = {
			name: name,
            email: email,
            tableSize: tableSize,
			startTime: startDateTime,
			endTime: endDateTime,
		};
		try {
			const response = await axios.post(`${url}/bookings/initiate`, booking);
            console.log(response);
			Toastify({
				text: 'Event created successfully',
				duration: 0,
				destination: 'https://github.com/apvarun/toastify-js',
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'right', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #00b09b, #96c93d)',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		} catch (error) {
			Toastify({
				text: 'An error ocurred',
				duration: 3000,
				destination: 'https://github.com/apvarun/toastify-js',
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'right', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'red',
				},
				onClick: function () {}, // Callback after click
			}).showToast();
		}
	};

  // function dateToString(date: Date | null): string {
  //   if (date == null)
  //     return ""
  //   return date.toLocaleDateString();
  // }
  //
	return (
		<Form id='form' onSubmit={handleSubmit}>
			<Form.Group className='mb-3'>
				<Form.Label>What should we call you?</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter your name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>
					Provide a valid email, we will send you a confirmation link.
				</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter your email address'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</Form.Group>
			<FormGroup className='mb-3'>
				<Form.Label>Type of booking (table size)</Form.Label>
				<Form.Select
					onChange={(e) => setTableSize(e.target.value)}
					defaultValue=''
					required
				>
					<option value=''>Please select the table size</option>
					<option value='MICRO'>Micro (2 people)</option>
					<option value='SMALL'>Small (up to 4 people)</option>
					<option value='LARGE'>Large (up to 8 people)</option>
					<option value='DOUBLE_LARGE'>
						Double Large (up to 12 people)
					</option>
					<option value='EVERYTHING'>
						Store rental (20 to 32 people)
					</option>
				</Form.Select>
			</FormGroup>
			<div className='dates'>
				<Form.Group className='mb-3'>
					<Form.Label>Date</Form.Label>
					<Form.Control
						type='date'
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>From:</Form.Label>
					<Form.Control
						type='time'
						step={600}
						min='15:00'
						max='23:50'
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>To:</Form.Label>
					<Form.Control
						type='time'
						step={600}
						min='15:10'
						max='23:59'
						value={endTime}
						onChange={(e) => setEndTime(e.target.value)}
						required
					/>
				</Form.Group>
			</div>
			<Button variant='' className='btn-highlight'>
				Book a table!
			</Button>
		</Form>
	);
}

export default EventForm;
