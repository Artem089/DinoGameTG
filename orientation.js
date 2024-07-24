function setLandscapeOrientation() {
    if (window.screen.orientation) {
        window.screen.orientation.lock('landscape').catch(function(error) {
            console.error('Error attempting to lock screen orientation:', error);
            alert('Please rotate your device to landscape mode for the best experience.');
        });
    } else if (window.screen.lockOrientation) {
        window.screen.lockOrientation('landscape');
    } else if (window.screen.mozLockOrientation) {
        window.screen.mozLockOrientation('landscape');
    } else if (window.screen.msLockOrientation) {
        window.screen.msLockOrientation('landscape');
    } else {
        console.warn('Screen orientation lock not supported on this browser.');
        alert('Please rotate your device to landscape mode for the best experience.');
    }
}

setLandscapeOrientation();
