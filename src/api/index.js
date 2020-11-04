import request from './request';

export const reqLogin=(username,password)=>ajax('/login',{username,password},'POST')