export const contractAddress = "0x6304713b0C4d2baa38BCA4116CB68ab5D6F6215c";
export const abi = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "lat2",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "lon2",
				type: "uint256",
			},
		],
		name: "calculateDistance",
		outputs: [
			{
				internalType: "uint256",
				name: "dist",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "empAddress",
				type: "address",
			},
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "lat",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "lon",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "allowedDistance",
				type: "uint256",
			},
		],
		name: "createEmployee",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "employeeCondition",
		outputs: [
			{
				internalType: "string",
				name: "status",
				type: "string",
			},
			{
				internalType: "bool",
				name: "condition",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "employees",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "empAddress",
				type: "address",
			},
		],
		name: "getEmployeeDetail",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getEmployees",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "empAdderss",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "lat",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "lon",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "etimestamp",
				type: "uint256",
			},
		],
		name: "ingestCoordinate",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "x",
				type: "uint256",
			},
		],
		name: "sqrt",
		outputs: [
			{
				internalType: "uint256",
				name: "y",
				type: "uint256",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
];
