# portal-preview-demo
This demo demonstrates how Portals can enable a seamless user experience by showing preview of the next page and transition into it.

![hero_gif](https://cdn.glitch.com/98449704-33d8-49b2-88f2-aa6d2aeba5d3%2Fpreview-demo_1.gif?1556561067109)

## Runnig the demo
### 1. Run the app
```bash
$ git clone https://github.com/uskay/portal-preview-demo.git
$ cd portal-preview-demo
$ npm install
$ npm run demo
```

### 2. Open a browser that supports Portals
As of May 2019, Chrome Canary is the only platform that supports Portals. You can try out Portals in Chrome Canary by flipping an experimental flag (chrome://flags/#enable-portals).

### 3. Play around with it ;-)
- Access [http://localhost:8080/](http://localhost:8080/)
- Enter any URL and press the button => A portal preview will show up
- Click/tap on the portal => Seamlessly transitions into the page

## Explainer
`js/portals-controller.js` is self explanatory. Please check out the code there.
![explainer](https://cdn.glitch.com/98449704-33d8-49b2-88f2-aa6d2aeba5d3%2FScreen%20Shot%202019-04-30%20at%2003.16.51.png?1556561829018)

## Disclaimer
The code base is built for demo purpose only (non production ready code). The demo is written in ES6 syntax. To make the demo simple, it is not transpiling to ES5 and also not adding any polyfills. If you access the demo with a browser that does not support Portals, it will show a message.
<br/>
## License
[https://github.com/WICG/portals/blob/master/LICENSE.md](https://github.com/WICG/portals/blob/master/LICENSE.md)