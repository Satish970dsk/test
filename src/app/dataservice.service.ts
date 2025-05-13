import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  countrynames():string[]{

  return['india','canada','america','uk','others']
  }

  prod:Iproduct[]=[
    {pid:'p001', pname:'watch', price:120,description:'see varity of clocks fdgsdhsdgdsgdsgdgdg', pimage:'/assets/b.jpg'},
    {pid:'p002', pname:'car', price:100, description:'new model car are avialbledfgdsgdgdg', pimage:'/assets/car.jpg'},
    {pid:'p003', pname:'mouse', price:500, description:'Computer Electronicssdfgdgdgdgfgfdgd', pimage:'/assets/mouse.jpg'},
    {pid:'p004', pname:'tv', price:5200, description:'Lg 65inches modelsdfgdsgdsgsdgsdfsfsfs', pimage:'/assets/tv.jpg'},
    {pid:'p005', pname:'projector', price:20, description:'highend modelsdfgfdgdsffsdfsafsafsaf', pimage:'/assets/projector.jpg'},
    {pid:'p006', pname:'fan', price:5000,description:'keep your self cooldfgdgfdgdfsdafdf', pimage:'/assets/ac.jpg'},
  
    ]
}

export interface Iproduct{
  pid:string;
  pname:string;
  price:number;
  description:string;
  pimage:string;

}