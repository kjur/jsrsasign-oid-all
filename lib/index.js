function addon(jsrsasign) {
    var modules = [
	"jsrsasign-oid-jpcomreg",
	"jsrsasign-oid-jpki",
	"jsrsasign-oid-eidas",
	"jsrsasign-oid-psd2",
	"jsrsasign-oid-ru",
	"jsrsasign-oid-ms",
	"jsrsasign-oid-misc"
    ];
    modules.map(s => require(s).addon(jsrsasign));
}

exports.addon = addon;
