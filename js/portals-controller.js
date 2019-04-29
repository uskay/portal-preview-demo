/**
 * Adding preview of a given URL with portals
 * Activates by user clicking/taping the element
 * @param {String} url 
 */
const addPreviewPortal = url => {
    // Remove any exisiting portals
    const existingPortal = document.querySelector('portal');
    if(existingPortal) {
        existingPortal.remove();
    }

    // Adding some styles with transitions
    const style = document.createElement('style');
    const initialScale = 0.4;
    style.innerHTML = `
    portal {
    position:fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition:
        transform 0.4s,
        bottom 0.7s,
        left 0.7s,
        opacity 1.0s;
    box-shadow: 0 0 20px 10px #999;
    transform: scale(${initialScale});
    bottom: calc(20px + 50% * ${initialScale} - 50%);
    left: calc(20px + 50% * ${initialScale} - 50%);
    z-index: 10000;
    }
    .portal-reveal {
    transform: scale(1.0);
    bottom: 0px;
    left: 0px;
    }
    .fade-in {
    opacity: 1.0;
    }
    `;
    const portal = document.createElement('portal');
    portal.src = url;
    portal.addEventListener('click', evt => {
    // Animate the portal once user interacts
    portal.classList.add('portal-reveal');
    });
    portal.addEventListener('transitionend', evt => {
    if (evt.propertyName == 'bottom') {
        // Activate the portal once the transition has completed
        portal.activate();
    }
    });
    document.body.appendChild(style);
    document.body.appendChild(portal);

    // Waiting for the page (portal host) to load.
    // using setTimeout is a suboptimal way and it’s best to fade-in
    // when receiving a load complete message from the portal
    setTimeout(_ => portal.classList.add('fade-in'), 2000);
}

// If portal is available init the app
if('HTMLPortalElement' in window) {
    document.querySelector("button").addEventListener("click", _ => {
        const url = document.querySelector("#preview-url").value;
        addPreviewPortal(url);
    });
} else {
    // If the browser does not support portals, show message
    const message = "This browser does not support Portals.";
    alert(message);
    document.querySelector("#preview-url").placeholder = message;
}
