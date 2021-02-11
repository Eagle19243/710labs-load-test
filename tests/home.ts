import { Browser } from '@flood/element';
import { BaseURL } from '../config';

export default async (browser: Browser) => {
	// visit instructs the browser to launch, open a page, and navigate to https://staging.710labs.com/
	await browser.visit(BaseURL);
	await browser.takeScreenshot();
}
