function switchSite(url, elmnt, newtab) {
	for (let item of document.querySelectorAll('.info-item')) {
		item.dataset.active = 0;
	}
	elmnt.parentElement.dataset.active = 1;

	const previewContainer = document.querySelector('.preview-container');
	const preview = document.querySelector('.preview');
	const previewTitle = document.querySelector('.preview-title');
	const previewLink = document.querySelector('#preview-link');
	const previewNoticeLink = document.querySelector('.preview-notice-link');

	previewContainer.dataset.active = 1;

	if (!newtab) {
		previewContainer.dataset.notice = 0;

		preview.src = url;
		previewTitle.innerText = elmnt.innerText;
		previewLink.href = url;
	} else {
		previewContainer.dataset.notice = 1;

		preview.src = '';
		previewNoticeLink.href = url;
	}
}
function resetPreview() {
	const preview = document.querySelector('.preview');
	preview.src = preview.src;
}