import React from 'react';
import {
	Container,
	ContentContainer,
	HeaderText,
	ServiceContainer,
	ServiceDescription,
	ServicePrice,
	ServiceTitle,
} from './index.styled';
import { SERVICES } from './const';

const Services = () => {
	return (
		<Container id='services'>
			<HeaderText>Our Services</HeaderText>
			<ContentContainer>
				{SERVICES?.map((service) => (
					<ServiceContainer>
						<ServiceTitle>{service.title}</ServiceTitle>
						<ServicePrice>{`$ ${service.price}`}</ServicePrice>
						<ServiceDescription>{service.description}</ServiceDescription>
					</ServiceContainer>
				))}
			</ContentContainer>
		</Container>
	);
};

export default Services;
