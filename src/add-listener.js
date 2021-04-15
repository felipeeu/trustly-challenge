export const addPanelListener = (success, error) => {
	window.PayWithMyBank.addPanelListener(function(command, event) {
		if (command === 'event' && event.type === 'new_location') {
			if (event.data.indexOf('#success') === 0) {
				success();
			} else {
				alert('cancel!');
				error();
			}
			return false;
		}
	});
};
