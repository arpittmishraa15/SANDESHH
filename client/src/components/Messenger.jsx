import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from '../components/accounts/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    // background-color: #0000FF;
    height: 125px;
    box-shadow: none;
`;
    
const LoginHeader = styled(AppBar)`
    // background: #3A90E0;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;