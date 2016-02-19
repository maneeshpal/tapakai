module.exports = function () {
	console.log.apply(console, Array.prototype.slice.call(arguments));
}