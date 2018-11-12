const FIBOS = require("fibos.js");

let httpEndpoint = "http://127.0.0.1:8801";
let name = "fibos account name";
let prikey = "fibos account prikey";

var fibos = FIBOS({
	chainId: "68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a",
	httpEndpoint: httpEndpoint,
	keyProvider: prikey,
	logger: {
		log: null,
		error: null
	}
});


let abi = require("./dapp/abi.json");
fibos.setcodeSync(name, 0, 0, fibos.compileModule('./dapp/code'));
fibos.setabiSync(name, abi, {
	authorization: name
});

let lib = require("../lib");

lib(name, {
	env: "dev"
});