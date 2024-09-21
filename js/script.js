'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const cel = document.querySelector('#cel'),
			fah = document.querySelector('#fah');

	cel.addEventListener('input', () => {
		fah.value = cel.value * 1.8 + 32;
	})
})