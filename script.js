function switchSite(url, elmnt, newtab) {
	for (let item of document.querySelectorAll('.info-item')) {
		item.dataset.active = 0;
	}
	elmnt.parentElement.dataset.active = 1;

	const info = document.querySelector('.info');
	info.scrollTop = elmnt.parentElement.offsetTop - 200;

	const container = document.querySelector('.container');
	container.dataset.preview = 1;
	container.dataset.transcript = 0;

	const infoTitleName = elmnt.querySelector('.info-item-title-name');
	const previewContainer = document.querySelector('.preview-container');
	const preview = document.querySelector('.preview');
	const previewTitle = document.querySelector('.preview-title');
	const previewLink = document.querySelector('#preview-link');
	const previewNoticeLink = document.querySelector('.preview-notice-link');

	if (url.length == 0) {
		previewContainer.dataset.notice = 2;
		preview.src = '';
	} else if (!newtab) {
		previewContainer.dataset.notice = 0;

		preview.src = url;
		previewTitle.innerText = infoTitleName.innerText;
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

function openTranscript(elmnt) {
	for (let item of document.querySelectorAll('.info-item')) {
		item.dataset.active = 0;
	}
	elmnt.parentElement.dataset.active = 1;
	const container = document.querySelector('.container');
	container.dataset.preview = 0;
	container.dataset.transcript = 1;
	const preview = document.querySelector('.preview');
	preview.src = '';
}