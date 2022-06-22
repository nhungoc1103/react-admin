import './App.css';
import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser, CreateButton} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './UserList';
import {PostList, PostEdit, PostCreate} from './Post';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import AuthProvider from './AuthProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div className='App'>
      <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
      </Admin>
    </div>
  );
}
export default App;
