const installEvent = () => {
	self.addEventListener('install', () => {
		console.log('service worker installed');
	});
};
installEvent();

const activateEvent = () => {
	self.addEventListener('activate', () => {
		console.log('service worker activated');
	});
};
activateEvent();

const cacheName = 'v1';

const cacheClone = async (e) => {
	const res = await fetch(e.request);
	const resClone = res.clone();

	const cache = await caches.open(cacheName);
	await cache.put(e.request, resClone);
	return res;
};

const imageTimer = ({ index, imageIndex, size }) => {
	if (imageIndex + 1 < size) {
		return {
			res: imageIndex + 1,
			index: index,
		};
	} else {
		return {
			res: 0,
			index: index,
		};
	}
};

addEventListener('message', (event) => {
	postMessage(imageTimer(event.data));
});
