let commandOutput;
let commandProgressOutput;
let socket = io();
socket.on('log', (msg) => {
	commandProgressOutput.append(`<span>${JSON.stringify(msg)}</span><br />`);
});

$(() => {
	commandProgressOutput = $('pre#commandProgressOutput');
	commandOutput = $('pre#commandOutput');

	let dateObj = $.find('#ccScheduledStartDate');
	let timeObj = $.find('#ccScheduledStartTime');
	let now = moment();
	dateObj[0].value = now.format('YYYY-MM-DD');
	timeObj[0].value = now.format('HH:mm');

	let commonOptions = {
		success : (data) => {
			commandOutput.html(`success : ${JSON.stringify(data)}`);
		},
		error : (jqXHR, textStatus, errorThrown) => {
			commandOutput.html(`error : ${JSON.stringify(textStatus)}`);
			console.error(jqXHR);
			console.error(textStatus);
			console.error(errorThrown);
		}
	};

	$('button#toggleProgress').click(() => {
		commandProgressOutput.toggle();
	});

	$('button#getBatteryStatus').click(() => {
		$.ajax(_.extend({
			url : '/batStats',
		}, commonOptions));
	});

	$('button#ccON').click(() => {
		$.ajax(_.extend({
			url : '/ccON',
			method : 'POST',
		}, commonOptions));
	});

	$('button#ccOFF').click(() => {
		$.ajax(_.extend({
			url : '/ccOFF',
			method : 'POST',
		}, commonOptions));
	});

	$('button#ccScheduledStartBtn').click(() => {
		let timeToStart = moment(dateObj[0].value + ' ' + timeObj[0].value + ':00').toISOString();
		$.ajax(_.extend({
			url : '/ccScheduledStart',
			method : 'POST',
			data : {
				datetime : timeToStart
			}
		}, commonOptions));
	});

	$('button#setChargingON').click(() => {
		$.ajax(_.extend({
			url : '/setChargingON',
			method : 'POST',
		}, commonOptions));
	});
});