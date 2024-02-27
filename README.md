# Introducing Scan GPT

Our extension makes it simple to find GPT-generated text on any web page. Just install it and let it scan the page for you.

Website → [ ScanGPT ](https://scangpt.wtf)

Extension → [ Install ](https://chrome.google.com/webstore/detail/scangpt/goaaajgmfpnfebljepkcdmlmjfpeamko)

Instagram → [ @ScanGPT ](https://instagram.com/scangpt)

### Some Snaps:

<a href="https://scangpt.wtf"><img alt="Redesigned Home Page" src="https://github.com/zaidmukaddam/scan-gpt/blob/main/images/home-page.png" style="border-radius:16px"></a>

### Tech:

#### Website:

- NextJs
- TailwindCSS
- Framer Motion

#### Extension:

- HTML
- Vanilla Js
- Vanilla CSS

# Pre-Release

### TODO:

- [x] SEO on website
- [x] Loading state for extension.
- [x] Extension debug on more websites
- [x] Publish on Chrome store
- [x] Fix scroll overflow
- [x] Add XSS prevention on the backend
- [x] Add star on GitHub button
- [x] Add "Introducing ScanGPT" instagram thingy
- [x] Resolve single paragraph issue
- [x] Improve README

# V1.0 is out!

### TODO:

- [x] Update permissions on manifest
- [x] Support page
- [x] Content on support page
- [x] Lighter Option on support page
- [x] Motion for Option component
- [x] Buttons have a ugly flickr on mobile
- [x] Dashboard page
- [x] Mobile version for Dashboard
- [x] Fix border radius
- [x] Fix the extension/api
- [x] Add loading components
- [x] Add error components

# Extension Fix - Extension has been fixed

Vercel functions can only execute for 10 seconds.

Api/scan was taking too much to execute with all the paragraphs (164 seconds).
Extension fix is now fetching individual paragraphs instead of all in the same request.

#### Author: [ Zaid Mukaddam ](https://github.com/zaidmukaddam)
