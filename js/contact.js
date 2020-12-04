var me = document.querySelector('form');
me.addEventListener('submit', (e) => {
	e.preventDefault();
	var name = document.querySelector('input[name=name]');
	var email = document.querySelector('input[name=email]');
	var phone = document.querySelector('input[name=phone]');
	var message = document.querySelector('textarea[name=message]');
	var notify = document.querySelector('div.success');
	let success;
	let data = {
		name: name.value,
		email: email.value,
		tel_number: phone.value,
		message: message.value.trim(),
		domain: 'www.ds-consulting.co.za',
	};
	fetch('https://www.tshegofatso100.co.za/messages', {
		body: JSON.stringify({ messages: data }),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			success = res.ok;
			return res.json();
		})
		.then((data) => {
			if (success) {
				name.value = '';
				email.value = '';
				phone.value = '';
				message.value = '';
				notify.style.display = 'block';
				setTimeout(() => (notify.style.display = 'none'), 2000);
			} else {
			}
		});
	console.log('submit');
});
