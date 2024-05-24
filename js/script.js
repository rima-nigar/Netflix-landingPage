const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab content item
function selectItem(e) {
    //Remove show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}


function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});