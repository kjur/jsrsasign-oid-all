var assert = require('assert');
var rs = require("jsrsasign");
require('../lib/index.js').addon(rs);

var oids = {
    "id-cabf-cp":			"2.23.140.1",			// from misc
    "jpcomreg-certificatePolicy":	"1.2.392.100300.1.3.4",		// from jpcomreg
    "jpki-pd-commonName":               "1.2.392.200149.8.5.5.1",	// from jpki
    "psd2-qcp-web":			"0.4.0.19495.3.1",		// from psd2
    "Russian Federation":		"1.2.643",			// from ru
    "id-ms-kp-documentSigning":		"1.3.6.1.4.1.311.10.3.12",	// from ms
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;


describe("Full OIDs", function() {
    describe("KJUR.asn1.x509.OID", function() {
	var OID = rs.KJUR.asn1.x509.OID;
	var name2oid = OID.name2oid;
	var equal = assert.equal;

        it('existing sha256', function() {
            equal("2.16.840.1.101.3.4.2.1", name2oid("sha256"));
        });

	for (var name in oids) {
	    it("name2oid " + name,
	       function() {equal(oids[name], OID.name2oid(name));});
	}

	for (var name in oids) {
	    it("oid2name " + name,
	       function() {equal(name, OID.oid2name(oids[name]));});
	}
    });
});
