import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('arrival offers a quiet moment, a working support map, and sourced reading',async({page})=>{
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/Sereinly/);
  await expect(page.getByRole('heading',{name:'A little less noise. A little more you.'})).toBeVisible();
  await expect(page.locator('dialog[open]')).toHaveCount(0);
  await expect(page.getByRole('button',{name:/Soft rain · off/})).toBeVisible();
  await page.getByRole('button',{name:/Soft rain · off/}).click();
  await expect(page.getByRole('button',{name:/Soft rain · on/})).toHaveAttribute('aria-pressed','true');
  await page.getByRole('button',{name:/Soft rain · on/}).click();
  await page.getByRole('button',{name:'Take a gentle pause'}).click();
  const dialog=page.getByRole('dialog');
  await expect(dialog.getByRole('heading',{name:'Nothing to do but be here.'})).toBeVisible();
  await dialog.getByRole('button',{name:/Try a quiet minute/}).click();
  await expect(dialog.getByText('A gentle breath in.',{exact:true})).toBeVisible();
  await dialog.getByRole('button',{name:/Pause this moment/}).click();
  await dialog.getByRole('button',{name:'Close dialog'}).click();
  await page.getByRole('button',{name:'Find focus',exact:true}).click();
  await page.getByRole('button',{name:'Break a task down',exact:true}).click();
  await expect(dialog.getByRole('heading',{name:'Just the next small step.'})).toBeVisible();
  await dialog.getByRole('button',{name:'Close dialog'}).click();
  await page.getByRole('button',{name:/When your mind won’t slow down/}).click();
  await expect(dialog.getByRole('link',{name:'NHS · Tackling your worries'})).toHaveAttribute('href',/nhs.uk/);
  await dialog.getByRole('button',{name:'Try worry time'}).click();
  await expect(dialog.getByRole('heading',{name:'A time and place for worries.'})).toBeVisible();
  expect(errors).toEqual([]);
});

test('personal records survive the brand migration and a lock/unlock cycle',async({page})=>{
  await page.goto('/');
  await page.getByRole('button',{name:'Privacy & settings',exact:true}).click();
  await page.getByRole('button',{name:'Enable / unlock saving'}).click();
  const dialog=page.getByRole('dialog');
  await dialog.getByLabel('Create a passphrase (10+ characters)').fill('a private test passphrase');
  await dialog.getByRole('button',{name:'Enable encrypted saving'}).click();
  await expect(dialog).not.toBeVisible();
  await page.getByRole('button',{name:'Personalize your focus'}).click();
  await dialog.getByLabel('What should we call you? (optional)').fill('River');
  await dialog.getByRole('button',{name:'Make myself at home'}).click();
  await page.getByRole('button',{name:'Lock vault',exact:true}).click();
  await expect(page.getByText('Records live only in this tab until encrypted saving is enabled.')).toBeVisible();
  // Simulate an existing installation using the previous release's storage key.
  await page.evaluate(()=>{const raw=localStorage.getItem('sereinly-v1')!;localStorage.setItem('mindhaven-v1',raw);localStorage.removeItem('sereinly-v1')});
  await page.reload();
  await page.getByRole('button',{name:'Privacy & settings',exact:true}).click();
  await page.getByRole('button',{name:'Enable / unlock saving'}).click();
  await dialog.getByLabel('Unlock your vault').fill('a private test passphrase');
  await dialog.getByRole('button',{name:'Unlock my vault'}).click();
  await page.getByRole('button',{name:'My space',exact:true}).click();
  await expect(page.getByRole('heading',{level:1})).toContainText('River');
  expect(await page.evaluate(()=>localStorage.getItem('mindhaven-v1'))).toBeNull();
  expect(await page.evaluate(()=>Boolean(localStorage.getItem('sereinly-v1')))).toBe(true);
});

test('mobile navigation, dark theme, keyboard dialogs and overflow',async({page})=>{
  await page.setViewportSize({width:390,height:844});
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto('/');
  await page.getByRole('button',{name:'Open navigation'}).click();
  await page.getByRole('button',{name:'The quiet library',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Understanding is a kind of self-care.'})).toBeVisible();
  await page.getByRole('button',{name:'Use dark theme'}).click();
  await expect(page.locator('.app')).toHaveClass(/dark/);
  await page.getByRole('button',{name:'I need support'}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  expect(overflow).toBe(false);
});

test('arrival meets automated WCAG A/AA checks in both themes',async({page})=>{
  await page.goto('/');
  for(const theme of ['light','dark']){
    if(theme==='dark')await page.getByRole('button',{name:'Use dark theme'}).click();
    const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    expect(results.violations,`${theme} arrival accessibility`).toEqual([]);
  }
});

test('journaling, insights and safety tools remain reachable from My space',async({page})=>{
  await page.goto('/');
  await page.getByRole('button',{name:'My space',exact:true}).click();
  const personal=page.getByRole('navigation',{name:'Personal space navigation'});
  await personal.getByRole('button',{name:'Journal',exact:true}).click();
  await page.getByRole('button',{name:'Free writing'}).click();
  const dialog=page.getByRole('dialog');
  await dialog.getByLabel('Your words').fill('A little space for this moment.');
  await dialog.getByRole('button',{name:'Keep this moment'}).click();
  await expect(page.getByText('A little space for this moment.',{exact:true})).toBeVisible();
  await personal.getByRole('button',{name:'Mood & insights',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Mood, sleep & anxiety'})).toBeVisible();
  await personal.getByRole('button',{name:'Safety plan',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Your personal safety plan'})).toBeVisible();
  await expect(page.getByLabel('1. My warning signs')).toBeVisible();
});
