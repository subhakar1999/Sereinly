import {chromium}from'@playwright/test';
import fs from'node:fs/promises';
await fs.mkdir('.qa',{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
for(const[device,width,height]of[['desktop',1440,1000],['mobile',390,844]]){const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});await page.screenshot({path:`.qa/sereinly-${device}.png`,fullPage:true});console.log(JSON.stringify({device,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),errors}));await page.close()}
await browser.close();
