import React from "react";
import { StatusBar } from "react-native";

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
							<ButtonText>Logout</ButtonText>
						</StyledButton>
					</StyledFormArea>
				</WelcomeContainer>
			</InnerContainer>
		</>
	);
};

export default Login;
