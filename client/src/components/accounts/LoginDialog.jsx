import { useContext } from "react";

import { Dialog, Box, Typography, List, ListItem, styled} from "@mui/material";

import { qrCodeImage } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

import { GoogleLogin} from "@react-oauth/google";

import jwt_decode  from 'jwt-decode';

const Component = styled (Box)`
    display:flex;
`

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`

const QRcode= styled('img')({
    height:264,
    width:264,
    margin:'0 0 0 50px'
})

const Title =styled(Typography)`
    font-size:26px;
    font-weight:300;
    font-family: inherit;
    margin-bottom:25px;
`

// const styledList= styled(List)`
//     & >li{
//         padding:0;
//         margin-top: 15px;
//         font-size:18px;
//     }
// `

const dialogStyle ={
    height:'95%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}



const LoginDialog = () => {

    const { setAccount }= useContext(AccountContext);



    const onLoginSuccess = async (res) =>{
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }


    const onLoginError =(res) =>{
        console.log('Login Failed', res);

    }

    return (
        <Dialog
            open={true}
            PaperProps={{sx:dialogStyle}}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To use Application on your Computer :</Title>
                    <List>
                        <ListItem>1. Open your mail </ListItem>
                        <ListItem>2. Select your mail and sign-in </ListItem>
                    </List>

                </Container>
                <Box style= {{position:'realtive'}}>
                    <QRcode src={qrCodeImage} alt="mail" />
                    <Box style= {{position: 'absolute', top:'20%', transform:'translateX(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>

                </Box>
            </Component>

        </Dialog>

    )



}

export default LoginDialog;