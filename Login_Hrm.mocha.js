
const { test,chromium } = require('@playwright/test')
const { expect } = require('chai')
const Orange_login_page = require('../Page/Orange_login_page')

describe('Orange HRM Login', function () {

    this.timeout(60000)

    let browser
    let page
    let login

    before('To navigate login url', async function () {

        browser = await chromium.launch({
            headless: false
        })

        page = await browser.newPage()

        login = new Orange_login_page(page)

        await login.goto()
    })

    after('To close the browser', async function () {

        await browser.close()
    })

    beforeEach('Take Screenshot before Testcase', async function () {

        await page.screenshot({
            path: 'Screenshots/Orange_Hrm_before.png'
        })
    })

    afterEach('Take Screenshot after Testcase', async function () {

        await page.screenshot({
            path: 'Screenshots/Orange_Hrm_after.png'
        })
    })

    it('TC001 - Verify successful login', async function () {

        await login.login('Admin', 'admin123')

        const url = page.url()

        expect(url).to.equal(
            'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
        )
    })

    it('TC002 - Verify page title and URL', async function () {

        await login.pageTitle()

        const url = page.url()

        expect(url).to.equal(
            'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
        )
    })

})




// const{chromium} = require('@playwright/test')
// const assert = require('assert')
// const {expect} = require('chai')
// const Orange_login_page = require('../Page/Orange_login_page')

// describe('Organe HRM Login',async function(){
//     this.timeout(6000)
//     let login 
//     let page
//     before('To navigate login url',async function () {
//         login = new Orange_login_page(page)
//         await login.goto()
//     })
//     after('To close the page',async function () {

//         await login.closebrowser()
        
//     })
//     it('Login Home Page',async function(){
//         await login.Login('Admin','admin123')
//     })

//     it('Page title and url',async function(){
//         await login.pageTitle()
//     })
//     beforeEach('Take Screenshot before Testcase', async function(){
//         await page.screenshot('Screenshots/Orange_Hrm_home_page.png')
//     })
//     afterEach('Take Screenshot after Testcase', async function(){
//         await page.screenshot('Screenshots/Orange_Hrm_dashboard_page.png')
//         const url = await page.url()
//         assert.strictEqual(url,'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//     })


    
// })






// const { chromium } = require('@playwright/test')
// const {expect} = require('chai')
// const Orange_login_page = require('../Page/Orange_login_page')

// describe('Orange HRM Login', function () {

//     this.timeout(60000)

//     let browser
//     let page
//     let login

//     before('To navigate login url', async function () {

//         // Launch browser
//         browser = await chromium.launch({
//             headless: false
//         })

//         // Create page
//         page = await browser.newPage()

//         // Create Page Object
//         login = new Orange_login_page(page)

//         // Navigate to URL
//         await login.goto()
//     })

//     after('To close the page', async function () {

//         await browser.close()
//     })

//     beforeEach('Take Screenshot before Testcase', async function () {

//         await page.screenshot({
//             path: 'Screenshots/Orange_Hrm_home_page.png'
//         })
//     })

//     afterEach('Take Screenshot after Testcase', async function () {

//         await page.screenshot({
//             path: 'Screenshots/Orange_Hrm_dashboard_page.png'
//         })

//         const url = page.url()

//         assert.strictEqual(
//             url,
//             'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
//         )
//     })

//     it('Login Home Page', async function () {

//         await login.Login('Admin', 'admin123')
//     })

//     it('Page title and url', async function () {

//         await login.pageTitle()
//     })
// })