import{chromium}from'@playwright/test';
import AxeBuilder from'@axe-core/playwright';
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const page=await context.newPage();
await page.goto('http://127.0.0.1:5173/');
for(const theme of['light','dark']){if(theme==='dark')await page.getByRole('button',{name:'Use dark theme'}).click();const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();console.log(JSON.stringify({theme,violations:result.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))},null,2));}
await browser.close();
