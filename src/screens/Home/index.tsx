import {  Container, Content, Logo, Profile } from './styles';

import logoImg from '@assets/Logo.png';
import profileImg from '@assets/Profile.png';
import { PercentCard } from '@components/PercentCard';
import { Meals } from '@components/Meals';

export function Home() {

    return (
        <Container>
            <Content>
                <Logo source={logoImg} />
                <Profile source={profileImg} />
            </Content>
            <PercentCard />
            <Meals />
        </Container>
    );

}