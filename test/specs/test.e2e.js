

const { expect, browser, driver } = require('@wdio/globals')


describe('mda app testing', () => {
    it('Products', async () => {
         await browser.pause(5000);
         const app = await $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]');
         await app.click()
         await browser.pause(2000);
         await browser.back()
       
    });

    it('Star', async()=>{
         await browser.pause(5000);
         
         const app = await $('(//android.widget.TextView[@text="󰓏"])[5]');
         await app.click()
         close_modal = await $('//android.widget.TextView[@text="Close Modal"]');
         close_modal.click()
         await browser.pause(2000);

         await browser.back()

    });

    it('Click circle', async()=>{
        await browser.pause(5000);
        const app = await $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]');
        await app.click()
        const appis = await $('//android.view.ViewGroup[@content-desc="black circle"]/android.view.ViewGroup');
        await appis.click()

        //for(let i =0; i<3;i++){

            //const app = await $$('android.view.ViewGroup');
            //await app[i].click()

        //}
        
    
        await browser.pause(2000);

        await browser.back()

   });

   it('Counter plus', async()=>{
    await browser.pause(5000);
    const appis = await $('//android.widget.TextView[@content-desc="store item text" and @text="Sauce Labs Backpack"]');
    await appis.click()

    const app = await $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView');

    for(let i =0; i<3;i++){

      await app.click()

    }
  
    await browser.pause(5000);
    
    const minus = await $('//android.view.ViewGroup[@content-desc="counter minus button"]/android.widget.ImageView');
    await minus.click()
    await browser.pause(3000)

    add_to_cart =  await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]');

    for(let i =0; i<3;i++){

        await add_to_cart.click()
  
    }
    
    await browser.pause(3000)
    await browser.back()

    




    });

    it('swipe', async() => {
        await browser.pause(5000);

        async scrolling(direction){
            let scroll = direction
            await browser.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        { type: "pointerMove", duration: 0, x: 360, y: 500 },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 500 },
                        { type: "pointerMove", duration: 3000, x: 360, y: scroll },
                        { type: "pointerUp", button: 0 }
                    ]
                }
            ])
        }




    });


   

    it.only('Catelog', async () => {
        await browser.pause(5000);
        const app = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
        await app.click()
        webview = await $('//android.widget.TextView[@text="Products"]');
        await webview.click()
        url = await $('//android.widget.EditText[@content-desc="URL input field"]');
        url.click()
        
        go_to_site = await $('//android.widget.EditText[@content-desc="URL input field"]');
        go_to_site.click()
        
        await browser.pause(2000);
        await browser.back()
        

        
      
    });



    
   


});