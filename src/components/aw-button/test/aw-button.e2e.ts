import { newE2EPage } from '@stencil/core/testing';

describe('aw-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-button></aw-button>');

    const element = await page.find('aw-button');
    expect(element).toHaveClass('hydrated');
  });

  it('class by status', async () => {
    const page = await newE2EPage();
    await page.setContent('<aw-button label="Danger" id="my-button" status="danger"></aw-button>');

    const element = await page.find('aw-button');
    const button = element.shadowRoot.childNodes[0];

    expect(button).toHaveClass('danger');
  });
});
