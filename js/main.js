///clock

function myClock() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let session = 'AM';
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('minute').innerHTML = minute;
	document.getElementById('second').innerHTML = second;
	document.getElementById('session').innerHTML = session;
	if (hour == 12) {
		session = 'AM';
	} else if (hour > 12) {
		hour = hour - 12;

		document.getElementById('hour').innerHTML = hour;
		session = 'PM';
		document.getElementById('session').innerHTML = ` <span style="color: #ed4b72">${session}</span>`;
	}
}
setInterval(myClock, 1000);
