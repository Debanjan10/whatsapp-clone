import styled from 'styled-components';
import {Avatar, Button, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator';

function Sidebar() {
    const createChat = ()=>{
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) return null;
        if (EmailValidator.validate(input)){
            // we need to add the cha into DB 'chats' collection here
            
        }
    };
    
  return (
    <Container>
       <Header>
        <UserAvatar/>
        <IconsContainer>
            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </IconsContainer>
       </Header> 
       <Search>
           <SearchIcon/>
           <SearchInput placeholder="search in chats"/>
       </Search>
       <SidebarButton>Start a new Chat</SidebarButton>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``;
const Header = styled.div`
display:flex;
position:sticky;
top:0;
background-color:aqua;
z-index: 1;
justify-content:space-between;
align-items: center;
padding:15px;
height:80px;
border-bottom:1px brown`;
const UserAvatar = styled(Avatar)`
margin:10px;
cursor:pointer;
:hover{
    opacity:2}`;
const IconsContainer = styled.div``;
const Search = styled.div``;
const SearchInput = styled.input`
outline-width:0;
border:none;
flex:1;`;
const SidebarButton=styled(Button)`
width:100%;
&&&{
    border-top:1px solidwhitesmoke;
    border-bottom:1px solidwhitesmoke}`;