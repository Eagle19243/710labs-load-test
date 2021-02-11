import { Browser, By, Until } from '@flood/element';

export default async (browser: Browser) => {
	const txtQuiz = By.css('.age-gate-challenge');
	await browser.wait(Until.elementIsVisible(txtQuiz));

	const btnYes = By.css('.age-gate-submit-yes');
	await browser.wait(Until.elementIsVisible(btnYes));

	await browser.takeScreenshot();

	const element = await browser.findElement(btnYes);
	await element.focus();
	await element.click();
}
