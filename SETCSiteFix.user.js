// ==UserScript==
// @name SETCSiteFix
// @include http://tnstc.in/*
// @include http://tnstc.in
// @include http://www.tnstc.in/*
// @run-at document-end
// @grant none
// @version 1.0
// @author Sundar Raman
// ==/UserScript==

main();

function main() {
	var images = document.getElementsByTagName('img');
	for (var img of images) {
		if(~img.src.indexOf('CMimg')) {
			img.width = '200'; 
		}
		if(~img.src.indexOf('jaya') || ~img.src.indexOf('CMimg')) {
			img.src = 'https://upload.wikimedia.org/wikipedia/commons/8/81/TamilNadu_Logo.svg';
			console.log('image replaced');
		}
	}
	if ($) {
		$('td[class=topwelcome]').remove();
	}
}
