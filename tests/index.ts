import { step, TestSettings } from '@flood/element';
import home from './home';
import over21 from './over21';

export const settings: TestSettings = {
	userAgent: '710labs-chrome-test',
	loopCount: 1,
  stepDelay: 1,
	waitUntil: 'visible',
}

export default () => {
  
  step('Home page', async b => {
    await home(b);
  });

  step('Over 21 page', async b => {
    await over21(b);
  });
  
}