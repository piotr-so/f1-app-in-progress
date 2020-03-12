import React from 'react';

import DriverPoints from '../driver-points/driver-points.component';

import { CardWrapper, DriverInfo, DriverNumber, DriverDescription, Name, Team, DriverImg } from './driver-card.styled';
import driverPlaceholderImg from '../../assets/imgs/driver_placeholder.png';

const DriverCard = ({ scaled, position, name, points, constructorTeam, img, teamBackgroundTheme, fixPosition }) => {
    return (
        <CardWrapper scaled={scaled} theme={teamBackgroundTheme}>
            <DriverInfo>
                <DriverNumber fixPosition={fixPosition}>{position}</DriverNumber>
                <DriverDescription fixPosition={fixPosition}>
                    <Name>{name}</Name>
                    <Team>{constructorTeam}</Team>
                    <DriverPoints>{points}</DriverPoints>
                </DriverDescription>
            </DriverInfo>
            <DriverImg src={img === undefined || img === 'emptyLoading' ? driverPlaceholderImg : img} alt={name} />
        </CardWrapper>
    );
}

export default DriverCard;