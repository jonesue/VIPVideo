function setLocalStorage(key, name) {
	window.localStorage ? localStorage.setItem(key, name) : Cookie.write(key, name);
}
//获取本地存储数据
function getLocalStorage(name) {
	return window.localStorage ? localStorage.getItem(name) : Cookie.read(name);
}