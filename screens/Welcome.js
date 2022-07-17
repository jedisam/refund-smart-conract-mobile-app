import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-get-random-values";
import * as Location from "expo-location";
import { abi, contractAddress } from "../constants/constants";
// Pull in the shims (BEFORE importing ethers)
import "@ethersproject/shims";

// Import the ethers library
import { ethers } from "ethers";

import { PRIVATE_KEY } from "@env";

import {
	InnerContainer,
	PageTitle,
	SubTitle,
	StyledFormArea,
	StyledButton,
	ButtonText,
	Line,
	WelcomeContainer,
	WelcomeImage,
	Avatar,
} from "../components/styles";

const Login = () => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	function listenForTransactionMine(transactionResponse, provider) {
		console.log(`Mining ${transactionResponse.hash}`);
		return new Promise((resolve, reject) => {
			provider.once(transactionResponse.hash, (transactionReceipt) => {
				console.log(`Completed with ${transactionReceipt.confirmations} confirmations. `);
				resolve(1);
			});
		});
	}
	useEffect(() => {
		(async () => {
			alert(PRIVATE_KEY);
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
			alert(JSON.stringify(location));
			console.log(JSON.stringify(location));
			const provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_RPC_URL);
			// console.log("The Provider: ", provider);
			const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
			// console.log("The SIGNER: ", signer);
			const contract = new ethers.Contract(contractAddress, abi, signer);
			// console.log("The CONTACT : ", contract);
			const transactionRsponse = await contract.getEmployees();
			console.log("THE TXRERS: ", transactionRsponse);
			await listenForTransactionMine(transactionRsponse, provider);
			console.log(transactionRsponse);
		})();
	}, []);
	return (
		<>
			<StatusBar style="light" />
			<InnerContainer>
				<WelcomeImage resizeMode="cover" source={require("../assets/img/images.jpeg")} />
				<WelcomeContainer>
					<PageTitle welcome={true}>Welcome there!</PageTitle>
					<SubTitle welcome={true}>Employee tracking system</SubTitle>
					<StyledFormArea>
						<Avatar resizeMode="cover" source={require("../assets/img/default.jpg")} />

						<Line />
						<StyledButton onPress={() => {}}>
							<ButtonText>Start</ButtonText>
						</StyledButton>
					</StyledFormArea>
				</WelcomeContainer>
			</InnerContainer>
		</>
	);
};

export default Login;
