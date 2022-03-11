function addon(jsrsasign) {
    var modules = [
	"jsrsasign-oid-jpcomreg",
	"jsrsasign-oid-jpki",
	"jsrsasign-oid-psd2",
	"jsrsasign-oid-ru"
    ];
    modules.map(s => require(s).addon(jsrsasign));
}

exports.addon = addon;
